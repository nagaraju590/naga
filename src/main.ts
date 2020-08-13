import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { getConfigFilePath, loadConfigFile } from './app/config-functions';
import { MANAGER_DASHBOARD_CONFIG } from './app/app.constants';
// import { ObservableStore } from '@codewithdan/observable-store';

if (environment.production) {
  enableProdMode();
} else {
  // ObservableStore.globalSettings = {
  //   trackStateHistory: true,
  //   logStateChanges: true,
  // };
  // ObservableStore.addExtension(new ReduxDevToolsExtension({ router: Router }));
}

function bootApplication() {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
}

const configFilePath = getConfigFilePath(
  'H2ODigitalActivityDashboard',
  environment.configFilePath
);

loadConfigFile(
  {
    configFilePath,
    runtimeConfigurationWindowKey: MANAGER_DASHBOARD_CONFIG,
  },
  () => bootApplication()
);
