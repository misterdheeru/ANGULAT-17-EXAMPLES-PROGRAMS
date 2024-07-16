import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeeCrudDemoComponent } from './employeee-crud-demo.component';

describe('EmployeeeCrudDemoComponent', () => {
  let component: EmployeeeCrudDemoComponent;
  let fixture: ComponentFixture<EmployeeeCrudDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeeCrudDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeeCrudDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
