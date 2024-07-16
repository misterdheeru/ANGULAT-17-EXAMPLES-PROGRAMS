import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactForm2Component } from './react-form-2.component';

describe('ReactForm2Component', () => {
  let component: ReactForm2Component;
  let fixture: ComponentFixture<ReactForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactForm2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
