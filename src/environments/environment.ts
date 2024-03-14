// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { NgxLoggerLevel } from 'ngx-logger';
import packageJson from '../../package.json';

export const environment = {
  production: false,
  info: {
    version: packageJson.version,
    name: packageJson.name,
    app: packageJson.project
  },
  api: {
    endpoints: {}
  },
  messages: {
    life: 5000
  },
  tables: {
    pagination: {
      available: [10, 50, 100]
    }
  },
  runtime: {
    api: {
      baseurl: {}
    }
  },
  logging: {
    disableWindowConsoleLogging: true,
    disableNgxLogging: false,
    apiUrl: 'http://localhost:8080/calendar/logs',
    logLevel: NgxLoggerLevel.DEBUG,
    serverLogLevel: NgxLoggerLevel.OFF,
    enableSourceMaps: true
  }
};
