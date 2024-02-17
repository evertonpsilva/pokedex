import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideEntityData, withEffects } from '@ngrx/data';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { entityConfig } from './entity-metadata';
function initializeApp(): Promise<any> {
  return new Promise((resolve, reject) => {
    // Do some asynchronous stuff
    console.log('before');

    const mode = localStorage.getItem('theme-mode');

    const bodyClass = document.body.classList;
    const darkModeClass = 'dark-mode';

    if (mode !== 'dark') {
      localStorage.setItem('theme-mode', 'light');
    } else {
      localStorage.setItem('theme-mode', 'dark');
      bodyClass.toggle(darkModeClass);
    }

    setTimeout(() => {
      resolve(null);
    }, 3000);
  });
}
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideEntityData(entityConfig, withEffects()),
    provideStore(),
    provideEffects(),
    provideHttpClient(withFetch()),
    {
      provide: APP_INITIALIZER,
      useFactory: () => initializeApp,
      multi: true,
    },
  ],
};
