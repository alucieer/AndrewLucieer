import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { PortfolioImageComponent } from '../portfolio-image/portfolio-image.component';

@Component({
  selector: 'app-portfolio',
  imports: [
    MatCardModule, 
    MatDividerModule,
    PortfolioImageComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent {}
