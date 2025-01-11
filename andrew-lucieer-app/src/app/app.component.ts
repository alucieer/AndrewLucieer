import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ThemeModeToggleComponent } from './theme-mode-toggle/theme-mode-toggle.component';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialogComponent } from './components/contact-dialog/contact-dialog.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, 
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive, 
    MatButtonModule, 
    MatIconModule,
    MatMenuModule,
    //ThemeModeToggleComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'andrew-lucieer-app';
  showHeaderShadow: boolean = false;
  isSmallScreen: boolean = false;
  readonly dialog = inject(MatDialog);

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      this.isSmallScreen = result.matches;
    });
  }

  ngOnInit() {

    window.addEventListener('scroll', this.scrollEvent, true);

  }

/*  ngOnDestroy() {

    window.removeEventListener('scroll', this.scrollEvent, true);

  }*/

   

  scrollEvent = (event:any): void => {
    const scrollTopVal = event.target.scrollingElement.scrollTop;
    if (scrollTopVal > 1) {
      this.showHeaderShadow = true;
    } else {
      this.showHeaderShadow = false;
    }
  }

  openContactDialog(): void {
    this.dialog.open(ContactDialogComponent);
    const dialogRef = this.dialog.open(ContactDialogComponent, {restoreFocus: false});
    //dialogRef.afterClosed().subscribe(() => this.menuTrigger().focus());
  }
}
