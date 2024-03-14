import { NgxLoggerLevel } from 'ngx-logger';
import packageJson from '../../package.json';

export const environment = {
  production: true,
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
    apiUrl: 'http://localhost:68552/api/logs',
    logLevel: NgxLoggerLevel.ERROR,
    serverLogLevel: NgxLoggerLevel.ERROR,
    enableSourceMaps: false
  }
};
