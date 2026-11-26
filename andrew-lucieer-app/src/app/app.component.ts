import { DOCUMENT, ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ThemeModeSwitcherComponent } from './components/theme-mode-switcher/theme-mode-switcher.component';

@Component({
  selector: 'app-root',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    RouterOutlet,
    RouterLink,
    ThemeModeSwitcherComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly scroller = inject(ViewportScroller);

  constructor(private iconRegistry: MatIconRegistry) {
    this.iconRegistry.setDefaultFontSetClass('material-symbols-outlined');

    this.scroller.setOffset(() => {
      const header = this.document.querySelector<HTMLElement>('.site-header');
      const sticky = header && this.document.defaultView?.getComputedStyle(header).position === 'sticky';
      return [0, (sticky ? header.offsetHeight : 0) + 12];
    });
  }

  protected scrollToTop(): void {
    this.document.getElementById('site-start')?.focus({ preventScroll: true });
    if (this.router.url === '/home') {
      this.scroller.scrollToPosition([0, 0]);
    } else {
      void this.router.navigate(['/home']);
    }
  }

  protected skipToContent(event: Event): void {
    const main = this.document.getElementById('main');
    if (main) {
      event.preventDefault();
      main.focus({ preventScroll: true });
      main.scrollIntoView({ behavior: 'instant' });
    }
  }
}
