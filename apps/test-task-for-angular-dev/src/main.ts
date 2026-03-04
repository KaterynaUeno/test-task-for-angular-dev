// /*
//  * Entry point of the application.
//  * Only platform bootstrapping code should be here.
//  * For app-specific initialization, use `app/app.component.ts`.
//  */

// import { enableProdMode } from '@angular/core';

// import { provideRouter } from '@angular/router';
// import { appRoutes } from '@app/app-routes';
// import { AppComponent } from '@app/app.component';

// import { environment } from '@env/environment';
// import { bootstrapApplication } from '@angular/platform-browser';

// if (environment.production) {
//   enableProdMode();
// }

// bootstrapApplication(AppComponent, {
//   providers: [provideRouter(appRoutes)],
// }).catch((err: unknown) => {
//   console.error(err);
// });
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslateService } from '@ngx-translate/core';

import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app-routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(),

    provideTranslateService({
      defaultLanguage: 'en',
      useDefaultLang: true,
    }),
  ],
}).catch((err: unknown) => console.error(err));
