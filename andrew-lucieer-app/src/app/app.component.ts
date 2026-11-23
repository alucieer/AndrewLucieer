import { DOCUMENT, ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, Component, Injector, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

type Theme = 'system' | 'light' | 'dark';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MatButtonModule, MatSelectModule, MatTooltipModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private readonly document = inject(DOCUMENT);
  private readonly injector = inject(Injector);
  private readonly router = inject(Router);
  private readonly scroller = inject(ViewportScroller);
  protected readonly theme = signal<Theme>(this.readTheme());
  protected readonly modes = {
    system: { label: 'System', icon: 'settings_night_sight' },
    light: { label: 'Light', icon: 'light_mode' },
    dark: { label: 'Dark', icon: 'dark_mode' },
  };

  constructor() {
    this.scroller.setOffset(() => {
      const header = this.document.querySelector<HTMLElement>('.site-header');
      const sticky = header && this.document.defaultView?.getComputedStyle(header).position === 'sticky';
      return [0, (sticky ? header.offsetHeight : 0) + 12];
    });
  }

  protected async setTheme(theme: Theme): Promise<void> {
    if (theme === this.theme()) return;
    this.theme.set(theme);
    this.document.documentElement.dataset['theme'] = theme;
    let saved = false;
    try {
      const storage = this.document.defaultView?.localStorage;
      storage?.setItem('portfolio-theme', theme);
      saved = !!storage;
    } catch {
      // A browser that blocks storage can still apply the current selection.
    }
    const { showThemeNotice } = await import('./theme-notice');
    if (theme === this.theme()) showThemeNotice(this.injector, saved);
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

  private readTheme(): Theme {
    const theme = this.document.documentElement.dataset['theme'];
    return theme === 'light' || theme === 'dark' ? theme : 'system';
  }
}
