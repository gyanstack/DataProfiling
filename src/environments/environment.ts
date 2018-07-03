// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { HttpClient, HttpHeaders } from '@angular/common/http';

const serviceAddress = 'localhost:3000';
const headers = new HttpHeaders();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');

export const environment = {
  production: false,
  enableConsoleLog: true,
  grainServiceURL: `http://${serviceAddress}/grain/list`,
  metricsServiceURL: `http://${serviceAddress}/metrics/list`,
  httpOptions: {
    headers: headers
  },
  httpPostOptions: {
    headers: headers // new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' })
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
