import { Component, inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PortfolioImageDialogComponent } from '../portfolio-image-dialog/portfolio-image-dialog.component';

@Component({
  selector: 'app-portfolio-image',
  imports: [],
  templateUrl: './portfolio-image.component.html',
  styleUrl: './portfolio-image.component.scss'
})
export class PortfolioImageComponent {
  @Input() filename: String;
  @Input() title: String;
  @Input() description: String;
  readonly dialog = inject(MatDialog);

  expandImage() {
    this.dialog.open(PortfolioImageDialogComponent,
      {
        data: {
          filename: this.filename,
          title: this.title,
          description: this.description
        },
        panelClass: 'portfolio-image-dialog'
      }
    );
  }
}
