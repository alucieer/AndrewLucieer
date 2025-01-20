import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioImageDialogComponent } from './portfolio-image-dialog.component';

describe('PortfolioImageDialogComponent', () => {
  let component: PortfolioImageDialogComponent;
  let fixture: ComponentFixture<PortfolioImageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioImageDialogComponent]
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
