# Microsoft Authentication Library (MSAL) with Nuxt 3 🚀

## Demo 🔍



https://github.com/Akash52/msal-with-nuxt3/assets/31063892/77e1351c-df21-4a91-bdd1-7cc53c387d81



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

### Register the app on the Azure portal

1. Go to https://portal.azure.com/
2. Search for Azure Active Directory in your organization and select `App Registrations` from the left panel and click on `New registration`.

![IMG_2493](https://github.com/Akash52/msal-with-nuxt3/assets/31063892/8d6de419-63d1-4453-8a1f-61bedf8c719d)


   
3. Register the application by giving your name, selecting supported account types (who can use this application) based on requirements, and clicking register.

![02](https://github.com/Akash52/msal-with-nuxt3/assets/31063892/b12cb01b-2b12-401b-a45b-c6890c265373)

4. Register redirect URL
https://yourapplication.com/ or for development http://localhost:3000/

Step 1 :
![04](https://github.com/Akash52/msal-with-nuxt3/assets/31063892/5cb69b77-8a69-4125-ba4a-8d466deff058)

Step 2 :

![03](https://github.com/Akash52/msal-with-nuxt3/assets/31063892/933027ef-8c58-4648-ab3d-912f4c552d61)

Step 3 :

![05](https://github.com/Akash52/msal-with-nuxt3/assets/31063892/9bc3b61e-6b0e-48af-9702-42055fe0e0ad)

5. Copy the app's essential info, create .env.local a file at the root of your project and set the value of the below .env variables.


![IMG_2497](https://github.com/Akash52/msal-with-nuxt3/assets/31063892/7dbea54b-db0f-44e9-b774-c87e87121301)


##### Refer to the image above to set the values for CLIENT and Tenet ID in the following ENV.

```
CLIENTID=
AUTHORITY=https://login.microsoftonline.com
REDIRECT_URI=http://localhost:3000
POSTLOGOUT_REDIRECT_URI=http://localhost:3000
```

#### Official documentation guide for Register an application with the Microsoft identity platform

- [https://learn.microsoft.com/en-gb/azure/active-directory/develop/quickstart-register-app](https://learn.microsoft.com/en-gb/azure/active-directory/develop/quickstart-register-app)


### Repo Tree

```
📦 
├─ .eslintrc.cjs
├─ .gitignore
├─ .npmrc
├─ README.md
├─ assets
│  ├─ Microsoft_logo.svg.png
│  └─ css
│     └─ main.css
├─ components
│  ├─ LoginScreen.vue
│  └─ UserProfile.vue
├─ layouts
│  └─ default.vue
├─ middleware
│  └─ auth.ts  // Authentication middleware
├─ nuxt.config.ts
├─ package-lock.json
├─ package.json
├─ pages
│  ├─ index.vue
│  └─ login.vue
├─ plugins
│  └─ msal.ts  // MSAL plugin file
├─ public
│  └─ favicon.ico
├─ stores
│  └─ auth.ts
├─ tailwind.config.js
└─ tsconfig.json
```

### Follow the steps below to make your own `MSAL plugin`. Alternatively, you can use a boilerplate that covers all necessary features in the `msal.ts` file.

1. Import the `PublicClientApplication` and other necessary modules from `@azure/msal-browser`.

2. Configure the `msalConfig` object with your authentication settings.

3. Create an instance of `PublicClientApplication` using the `msalConfig`.

4. Implement the various methods and functionalities described in the code snippet.

5. Optionally, provide the `msal` object to the Nuxt.js application using the `provide` option.

6. Use the provided functionality methods for authentication and token management in your Nuxt.js application.

## License

This project is licensed under the [MIT License](LICENSE).
