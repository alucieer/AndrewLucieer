import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const appRoutes = provideRouter(
  [
    { path: '', component: HomeComponent },
    { path: 'home', pathMatch: 'full', redirectTo: '' },
    { path: 'portfolio', pathMatch: 'full', redirectTo: '/#work' },
    { path: 'work', pathMatch: 'full', redirectTo: '/#work' },
    { path: 'lab', pathMatch: 'full', redirectTo: '/#lab' },
    { path: 'about', pathMatch: 'full', redirectTo: '/#about' },
    { path: '**', redirectTo: '' },
  ],
  withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
);
