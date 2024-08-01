import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpHomeComponent } from './gp.home.component';

describe('GpHomeComponent', () => {
  let component: GpHomeComponent;
  let fixture: ComponentFixture<GpHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GpHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GpHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
