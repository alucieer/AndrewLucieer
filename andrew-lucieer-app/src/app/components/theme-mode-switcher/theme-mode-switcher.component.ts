import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Injector, afterNextRender, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

type Theme = 'system' | 'light' | 'dark';

@Component({
  selector: 'app-theme-mode-switcher',
  imports: [
    MatSelectModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './theme-mode-switcher.component.html',
  styleUrl: './theme-mode-switcher.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeModeSwitcherComponent {
  private readonly document = inject(DOCUMENT);
  private readonly injector = inject(Injector);
  protected readonly theme = signal<Theme>('system');
  protected readonly modes = {
    system: { label: 'System', icon: 'settings_night_sight' },
    light: { label: 'Light', icon: 'light_mode' },
    dark: { label: 'Dark', icon: 'dark_mode' },
  };

  constructor() {
    afterNextRender(() => {
      this.theme.set(this.readTheme());
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
    const { showThemeNotice } = await import('../../theme-notice');
    await new Promise<void>((resolve) => setTimeout(resolve, 150));
    if (theme === this.theme()) showThemeNotice(this.injector, saved);
  }

  private readTheme(): Theme {
    const theme = this.document.documentElement.dataset['theme'];
    return theme === 'light' || theme === 'dark' ? theme : 'system';
  }
}
