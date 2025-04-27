import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { PortfolioImageComponent } from '../portfolio-image/portfolio-image.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-portfolio',
  imports: [PortfolioImageComponent, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {


  @ViewChild('imagesContainer') imagesContainer: ElementRef;

  scrollLeft() {
    const container = this.imagesContainer.nativeElement;
    container.scrollLeft -= 100;
  }

  scrollRight() {
    const container = this.imagesContainer.nativeElement;
    container.scrollLeft += 100;
  }
}
