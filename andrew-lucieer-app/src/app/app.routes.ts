import { provideRouter, withHashLocation } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { BlogComponent } from './components/blog/blog.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

export const appRoutes = provideRouter(
    [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'portfolio', component: PortfolioComponent },
        //{ path: 'about', component: AboutComponent },
        //{ path: 'services', component: ServicesComponent },
        //{ path: 'blog', component: BlogComponent }
    ],
    withHashLocation()
);