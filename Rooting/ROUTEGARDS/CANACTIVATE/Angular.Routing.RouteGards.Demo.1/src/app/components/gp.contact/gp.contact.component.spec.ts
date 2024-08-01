import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpContactComponent } from './gp.contact.component';

describe('GpContactComponent', () => {
  let component: GpContactComponent;
  let fixture: ComponentFixture<GpContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GpContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GpContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
