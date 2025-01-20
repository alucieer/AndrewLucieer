import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioImageComponent } from './portfolio-image.component';

describe('PortfolioImageComponent', () => {
  let component: PortfolioImageComponent;
  let fixture: ComponentFixture<PortfolioImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
