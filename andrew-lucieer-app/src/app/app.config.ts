import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    appRoutes,
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideAnimationsAsync()
  ]
};