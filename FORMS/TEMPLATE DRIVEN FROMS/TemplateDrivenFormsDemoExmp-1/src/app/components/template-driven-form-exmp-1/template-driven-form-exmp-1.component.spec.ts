import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormExmp1Component } from './template-driven-form-exmp-1.component';

describe('TemplateDrivenFormExmp1Component', () => {
  let component: TemplateDrivenFormExmp1Component;
  let fixture: ComponentFixture<TemplateDrivenFormExmp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDrivenFormExmp1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateDrivenFormExmp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
