import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindedComponent } from './data-binded.component';

describe('DataBindedComponent', () => {
  let component: DataBindedComponent;
  let fixture: ComponentFixture<DataBindedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataBindedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataBindedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
