import {BrowserCacheLocation, EventType, PublicClientApplication} from "@azure/msal-browser";


let tokenExpirationTimer: any;

export const useMSAuth = () => {

    const config = useRuntimeConfig();

    const msalConfig = {
        auth: {
            clientId: config.public.clientId,
            authority: config.public.authority,
            redirectUri: config.public.redirectUri,
            postLogoutRedirectUri: config.public.postLogoutRedirectUri,
            navigateToLoginRequestUrl: true,
        },
        cache: {
            cacheLocation: BrowserCacheLocation.LocalStorage,
            storeAuthStateInCookie: true,
        },
        system: {
            tokenRenewalOffsetSeconds: 300,
        },
    };

    let msalInstance = useState('msalInstance',
        () => new PublicClientApplication(msalConfig)
    );

    async function initialize() {
        await msalInstance.value.initialize();

        // Handle redirect promise after login or redirect
        await msalInstance.value
            .handleRedirectPromise() // Handles the redirect promise and obtains the response
            .then(handleResponse)
            .catch((err) => {
                throw new Error(err);
            });

        // Add event callback for login success
        msalInstance.value.addEventCallback((event) => {
            if (event.eventType === EventType.LOGIN_SUCCESS) {
                setupTokenExpirationTimer();
            }
        });

    }

    // Handle the response after login or redirect
    function handleResponse(resp: any) {
        if (resp?.account) {
            setupTokenExpirationTimer();
        } else {
            console.log("LOGIN");
        }
    }

    // Set up timer for refreshing access token upon expiration
    function setupTokenExpirationTimer() {
        const accounts = msalInstance.value.getAllAccounts();
        if (accounts.length > 0) {
            const account = accounts[0];
            if (account.idTokenClaims && account.idTokenClaims.exp) {
                const tokenExpirationTime = account.idTokenClaims.exp * 1000;
                const currentTime = Date.now();
                const timeUntilExpiration = tokenExpirationTime - currentTime;

                clearTimeout(tokenExpirationTimer);

                tokenExpirationTimer = setTimeout(() => {
                    refreshAccessToken(account);
                }, timeUntilExpiration);
            }
        }
    }

    // Refresh access token
    async function refreshAccessToken(account: any) {
        try {
            const response = await msalInstance.value.acquireTokenSilent({
                account,
                scopes: ["User.Read"],
            });
            console.log("Refreshed Access Token:", response.accessToken);
            setupTokenExpirationTimer();
        } catch (err) {
            console.error("Token refresh error:", err);
            //signOut(account.homeAccountId);
        }
    }

    const loginRequest = {
        scopes: ["User.Read"],
    };

    // Sign in with redirect
    async function signIn() {
        try {
            await msalInstance.value.loginRedirect(loginRequest);
        } catch (err) {
            console.log("Login error:", err);
        }
    }

    // Acquire access token silently
    async function acquireTokenSilent() {
        const accounts = msalInstance.value.getAllAccounts();
        if (accounts.length > 0) {
            const account = accounts[0];
            msalInstance.value.setActiveAccount(account);
            try {
                const response = await msalInstance.value.acquireTokenSilent({
                    account,
                    scopes: ["User.Read"],
                });
                return response.accessToken;
            } catch (err) {
                return null;
            }
        } else {
            console.error("No accounts found");
            return null;
        }
    }

    // Get all MSAL accounts
    function getAccounts() {
        return msalInstance.value.getAllAccounts();
    }

    // Check if user is authenticated
    function isAuthenticated() {
        return getAccounts().length > 0;
    }

    // Sign out user
    function signOut(accountId: string) {
        const account = accountId
            ? msalInstance.value.getAccountByHomeId(accountId)
            : null;
        if (account) {
            msalInstance.value.logoutRedirect({
                account,
            });
            localStorage.clear();
        } else {
            console.error("Account not found");
        }
    }


    return {
        initialize,
        msalInstance,
        signIn,
        getAccounts,
        acquireTokenSilent,
        isAuthenticated,
        signOut,
    }

}