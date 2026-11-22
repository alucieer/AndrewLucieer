import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { PortfolioImageComponent } from '../portfolio-image/portfolio-image.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppService } from '../../services/app-service/app.service';
import {MatDividerModule} from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioImageComponent, MatCardModule, MatDividerModule, MatIconModule, MatButtonModule, CommonModule, RouterModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  constructor() { }


}
