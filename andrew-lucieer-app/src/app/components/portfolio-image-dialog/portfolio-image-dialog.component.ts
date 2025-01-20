import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { DialogService } from '../../services/dialolg/dialog.service';

@Component({
  selector: 'app-portfolio-image-dialog',
  imports: [ 
        MatDialogClose, 
        MatIconModule, 
        MatButtonModule,
   ],
  templateUrl: './portfolio-image-dialog.component.html',
  styleUrl: './portfolio-image-dialog.component.scss'
})
export class PortfolioImageDialogComponent {
  data = inject(MAT_DIALOG_DATA);
  constructor(private dialogService: DialogService) {}

  ngOnInit() {
    this.dialogService.isDialogOpenSubject.next(true);
  }

  ngOnDestroy() {
    this.dialogService.isDialogOpenSubject.next(false);
  }
}
