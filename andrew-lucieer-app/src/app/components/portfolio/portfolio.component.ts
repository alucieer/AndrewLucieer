import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { PortfolioImageComponent } from '../portfolio-image/portfolio-image.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppService } from '../../services/app-service/app.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioImageComponent, MatCardModule, MatIconModule, MatButtonModule, CommonModule, RouterModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements AfterViewInit {
  imgCount: number = 6;
  scrollAmt: number = 200;
  @ViewChild('imagesContainer') imagesContainer: ElementRef;

  constructor(public appSvc: AppService) { }

  ngAfterViewInit() {
    setTimeout(() => { 
      if (this.appSvc.isSmallScreen) {
        this.scrollAmt = 150;
      } else {
        this.scrollAmt = this.imagesContainer.nativeElement.offsetWidth / this.imgCount;
      }
    }, 1);
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
