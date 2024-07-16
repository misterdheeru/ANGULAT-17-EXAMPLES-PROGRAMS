import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveDemo1Component } from './reactive-demo-1.component';

describe('ReactiveDemo1Component', () => {
  let component: ReactiveDemo1Component;
  let fixture: ComponentFixture<ReactiveDemo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveDemo1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
