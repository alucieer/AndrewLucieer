import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-portfolio-image',
  imports: [],
  templateUrl: './portfolio-image.component.html',
  styleUrl: './portfolio-image.component.scss'
})
export class PortfolioImageComponent {
  @Input({ required: true }) src!: string;
  @Input() fullSrc?: string;
  @Input({ required: true }) alt!: string;
  @Input() caption = '';
  @Input({ transform: numberAttribute }) width?: number;
  @Input({ transform: numberAttribute }) height?: number;
}