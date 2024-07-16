import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PIPEXMPComponent } from './pip-exmp.component';

describe('PIPEXMPComponent', () => {
  let component: PIPEXMPComponent;
  let fixture: ComponentFixture<PIPEXMPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PIPEXMPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PIPEXMPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
