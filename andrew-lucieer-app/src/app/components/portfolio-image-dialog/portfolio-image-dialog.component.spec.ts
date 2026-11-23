import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { PortfolioImageDialogComponent } from './portfolio-image-dialog.component';

describe('PortfolioImageDialogComponent', () => {
  let component: PortfolioImageDialogComponent;
  let fixture: ComponentFixture<PortfolioImageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioImageDialogComponent],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: { title: 'Portrait', filename: 'drew.jpg' } }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioImageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
