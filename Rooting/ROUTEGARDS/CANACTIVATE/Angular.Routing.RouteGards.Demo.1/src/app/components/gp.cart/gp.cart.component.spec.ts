import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpCartComponent } from './gp.cart.component';

describe('GpCartComponent', () => {
  let component: GpCartComponent;
  let fixture: ComponentFixture<GpCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GpCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GpCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
