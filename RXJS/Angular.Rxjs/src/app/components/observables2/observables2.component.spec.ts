import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Observables2Component } from './observables2.component';

describe('Observables2Component', () => {
  let component: Observables2Component;
  let fixture: ComponentFixture<Observables2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Observables2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Observables2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
