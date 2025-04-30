import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { ThemeModeToggleComponent } from './theme-mode-toggle/theme-mode-toggle.component';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialogComponent } from './components/contact-dialog/contact-dialog.component';
import { Subscription } from 'rxjs/internal/Subscription';
import { DialogService } from './services/dialolg/dialog.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';
import { AppService } from './services/app-service/app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive, 
    MatButtonModule, 
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
    ThemeModeToggleComponent,
    MatRippleModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'andrew-lucieer-app';
  scrolledDown: boolean = false;
  readonly dialog = inject(MatDialog);
  routerSubscription: Subscription;
  activeRouteURL: string;

  constructor(breakpointObserver: BreakpointObserver, 
    public dialogService: DialogService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    public appSvc: AppService) { }

  @HostListener('document:scroll', ['$event'])
  scrollEvent = (event:any): void => {
    const scrollTopVal = event.target.scrollingElement.scrollTop;
    if (scrollTopVal > 1) {
      this.scrolledDown = true;
    } else {
      this.scrolledDown = false;
    }
  }
  
  ngOnInit() { 
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeRouteURL = event.url.substring(1, event.url.length);
      }
    });
    
    this.dialogService.isDialogOpen$.subscribe(value => {
      //Set theme mode
      this.document.body.classList.toggle('dialog-open');
    });
  }

  openContactDialog(): void {
    this.dialog.open(ContactDialogComponent);
    //const dialogRef = this.dialog.open(ContactDialogComponent, {restoreFocus: false});
    //dialogRef.afterClosed().subscribe(() => this.menuTrigger().focus());
  }
}
