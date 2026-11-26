import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    appRoutes,
    provideZoneChangeDetection({ eventCoalescing: true }), provideClientHydration(),
  ],
};