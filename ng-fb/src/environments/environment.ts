// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'default',
  firebase: {
    config: {
      apiKey: 'AIzaSyD1lp8C3oO2FB2T81xQE7HGIWQU1P15jsc',
      authDomain: 'ty-portfolio.firebaseapp.com',
      projectId: 'ty-portfolio',
      storageBucket: 'ty-portfolio.appspot.com',
      messagingSenderId: '161985163688',
      appId: '1:161985163688:web:52c4e2ac96dd10bcfeed9d'
    },
    actionCodeSettings: {
      url: 'http://localhost:5200/demo',
      handleCodeInApp: true
  }
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
