import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindDataComponent } from './bind-data.component';

describe('BindDataComponent', () => {
  let component: BindDataComponent;
  let fixture: ComponentFixture<BindDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BindDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
