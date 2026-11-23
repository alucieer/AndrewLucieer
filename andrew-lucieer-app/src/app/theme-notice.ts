import { ChangeDetectionStrategy, Component, Injector, inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-theme-notice',
  template: `
    @if (notice.saved) {
      <span class="material-symbols-outlined" aria-hidden="true">check</span>
    }
    <span>{{ notice.message }}</span>
  `,
  styles: ':host { display: flex; align-items: center; gap: .75rem; padding: .875rem 1rem; }',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class ThemeNotice {
  protected readonly notice = inject<{ saved: boolean; message: string }>(MAT_SNACK_BAR_DATA);
}

export function showThemeNotice(injector: Injector, saved: boolean): void {
  const message = saved ? 'Theme mode saved' : 'Theme changed for this visit only';
  injector.get(MatSnackBar).openFromComponent(ThemeNotice, { data: { saved, message }, duration: 3500 });
}
