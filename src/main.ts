import { LandingPageModule } from './suvery/landing-page.module';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { SuveryModule } from './suvery/suvery.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(LandingPageModule)
  .catch(err => console.error(err));
