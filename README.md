# Microsoft Authentication Library (MSAL) with Nuxt 3 🚀

## Demo 🔍

https://github.com/Akash52/msal-with-nuxt3/assets/31063892/82a928a7-5545-4cbf-8adc-f30ba09e0fee

## Features ✨

- **🔁 Handle Redirect Promise**: The plugin handles the redirect promise after login or redirect and obtains the response.
- **🎉 Event Callback on Login Success**: An event callback is added to detect login success events, triggering the setup of a token expiration timer.
- **⏰ Token Expiration Timer**: A timer is set up to automatically refresh the access token upon expiration.
- **🔄 Refresh Access Token**: The plugin can refresh the access token silently using the `acquireTokenSilent` method.
- **🙌 Handle Response**: The plugin handles the response after login or redirect and sets up the token expiration timer if the response includes an account.
- **🔑 Acquire Token Silently**: The plugin provides a method to acquire the access token silently.
- **🚀 Sign In with Redirect**: Users can sign in with redirect using the `signIn` method.
- **🔍 Get All MSAL Accounts**: The plugin provides a method to retrieve all MSAL accounts.
- **🔒 Check Authentication Status**: The `isAuthenticated` method allows checking if the user is authenticated.
- **👋 Sign Out**: Users can sign out using the `signOut` method.

## Installation 🛠️

```bash
# Using npm
$ npm install --save @azure/msal-browser

# Using yarn
$ yarn add @azure/msal-browser
```

## Usage 🌟

#### Register an application with the Microsoft identity platform

- [https://learn.microsoft.com/en-gb/azure/active-directory/develop/quickstart-register-app](https://learn.microsoft.com/en-gb/azure/active-directory/develop/quickstart-register-app)

#### Set up your environment variables by creating a `.env` file in the root directory of your project. Add the following variables:

```
CLIENT_ID=b8ec46f5-
AUTHORITY=https://login.microsoftonline.com/
REDIRECT_URI=http://localhost:3000
POST_LOGOUT_REDIRECT_URI=http://localhost:3000
```

1. Import the `PublicClientApplication` and other necessary modules from `@azure/msal-browser`.

2. Configure the `msalConfig` object with your authentication settings.

3. Create an instance of `PublicClientApplication` using the `msalConfig`.

4. Implement the various methods and functionalities described in the code snippet.

5. Optionally, provide the `msal` object to the Nuxt.js application using the `provide` option.

6. Use the provided functionality methods for authentication and token management in your Nuxt.js application.

## License

This project is licensed under the [MIT License](LICENSE).
