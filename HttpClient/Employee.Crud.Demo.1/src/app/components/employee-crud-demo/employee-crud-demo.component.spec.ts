import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCrudDemoComponent } from './employee-crud-demo.component';

describe('EmployeeCrudDemoComponent', () => {
  let component: EmployeeCrudDemoComponent;
  let fixture: ComponentFixture<EmployeeCrudDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeCrudDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeCrudDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
