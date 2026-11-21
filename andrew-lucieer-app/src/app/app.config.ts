import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TitleStrategy } from '@angular/router';
import { appRoutes } from './app.routes';
import { TemplatePageTitleStrategy } from './services/template-page-title.strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    appRoutes,
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideAnimationsAsync()
  ]
};