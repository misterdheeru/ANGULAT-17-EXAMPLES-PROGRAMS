import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpDataBindingComponent } from './gp.data-binding.component';

describe('GpDataBindingComponent', () => {
  let component: GpDataBindingComponent;
  let fixture: ComponentFixture<GpDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GpDataBindingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GpDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
