import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, afterNextRender, inject } from '@angular/core';
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import AccessibilityLab from './accessibility-lab';

@Component({
  selector: 'app-react-lab',
  template: '',
  styleUrl: './react-lab.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactLabComponent {
  constructor() {
    const host = inject<ElementRef<HTMLElement>>(ElementRef);
    const destroy = inject(DestroyRef);

    afterNextRender(() => {
      const root = createRoot(host.nativeElement);
      root.render(createElement(AccessibilityLab));
      destroy.onDestroy(() => root.unmount());
    });
  }
}