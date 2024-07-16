import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBandingTask2Component } from './data-banding-task-2.component';

describe('DataBandingTask2Component', () => {
  let component: DataBandingTask2Component;
  let fixture: ComponentFixture<DataBandingTask2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataBandingTask2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataBandingTask2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
