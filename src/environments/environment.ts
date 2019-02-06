// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  config: {
    sharepointUrl: 'http://intranet.molytex.dk/kvalitet',    
    vismaApiBaseUrl: 'http://visma.molytex.local/api'
  }
};

/*
tenant: '[TENANT_GUID]',
clientId: '[CLIENTID_GUID]',
redirectUri: "[LOGIN_REDIRECT_URL]",
postLogoutRedirectUri: "[POST_LOGOUT_REDIRECT_URL]",
endpoints: {
  "[HOME_URL_WEB_API]": "[CLIENTID_WEB_API_GUID]"
*/

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
