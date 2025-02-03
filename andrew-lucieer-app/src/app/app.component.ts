import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, inject, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ThemeModeToggleComponent } from './theme-mode-toggle/theme-mode-toggle.component';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialogComponent } from './components/contact-dialog/contact-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { DialogService } from './services/dialolg/dialog.service';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatRippleModule} from '@angular/material/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule, 
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive, 
    MatButtonModule, 
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
    ThemeModeToggleComponent,
    MatRippleModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'andrew-lucieer-app';
  showHeaderShadow: boolean = false;
  isSmallScreen: boolean = false;
  readonly dialog = inject(MatDialog);
  routerSubscription: Subscription;
  activeRouteURL: string;

  constructor(breakpointObserver: BreakpointObserver, 
    public dialogService: DialogService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document) {
    breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      this.isSmallScreen = result.matches;
    });
  }

  ngOnInit() {
    //window.addEventListener('scroll', this.scrollEvent, true);
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

/*  ngOnDestroy() {

    window.removeEventListener('scroll', this.scrollEvent, true);

  }*/

   

  /*scrollEvent = (event:any): void => {
    const scrollTopVal = event.target.scrollingElement.scrollTop;
    if (scrollTopVal > 1) {
      this.showHeaderShadow = true;
    } else {
      this.showHeaderShadow = false;
    }
  }*/

  openContactDialog(): void {
    this.dialog.open(ContactDialogComponent);
    //const dialogRef = this.dialog.open(ContactDialogComponent, {restoreFocus: false});
    //dialogRef.afterClosed().subscribe(() => this.menuTrigger().focus());
  }
}
