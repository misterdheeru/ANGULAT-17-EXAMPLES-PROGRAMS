import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Observable4Component } from './observable4.component';

describe('Observable4Component', () => {
  let component: Observable4Component;
  let fixture: ComponentFixture<Observable4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Observable4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Observable4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
