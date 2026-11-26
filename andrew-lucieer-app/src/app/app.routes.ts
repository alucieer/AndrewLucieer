import { provideRouter, withHashLocation, withInMemoryScrolling } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const appRoutes = provideRouter(
  [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'portfolio', pathMatch: 'full', redirectTo: '/home#work' },
    { path: 'work', pathMatch: 'full', redirectTo: '/home#work' },
    { path: 'lab', pathMatch: 'full', redirectTo: '/home#lab' },
    { path: 'about', pathMatch: 'full', redirectTo: '/home#about' },
    { path: '**', redirectTo: 'home' },
  ],
  withHashLocation(),
  withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
);
