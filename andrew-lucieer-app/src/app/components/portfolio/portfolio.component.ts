import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
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
export class PortfolioComponent implements AfterViewInit {
  imgCount: number = 6;
  scrollAmt: number;
  @ViewChild('imagesContainer') imagesContainer: ElementRef;

  ngAfterViewInit() {
    this.scrollAmt = this.imagesContainer.nativeElement.offsetWidth / this.imgCount;
  }

  scrollLeft() {
    this.scrollImages(this.scrollAmt * -1);
  }

  scrollRight() {
    this.scrollImages(this.scrollAmt);
  }

  scrollImages(xAdjustment: number) {
    const container = this.imagesContainer.nativeElement;
    const scrollPosition = container.scrollLeft + xAdjustment;
    container.scroll(scrollPosition, 0);
  }
}
