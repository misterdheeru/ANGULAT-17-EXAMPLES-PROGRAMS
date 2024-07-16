import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsDemo1Component } from './reactive-forms-demo-1.component';

describe('ReactiveFormsDemo1Component', () => {
  let component: ReactiveFormsDemo1Component;
  let fixture: ComponentFixture<ReactiveFormsDemo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsDemo1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveFormsDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
