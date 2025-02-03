import { Component, inject } from '@angular/core';
import { PortfolioImageComponent } from '../portfolio-image/portfolio-image.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-portfolio',
  imports: [PortfolioImageComponent, MatCardModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
