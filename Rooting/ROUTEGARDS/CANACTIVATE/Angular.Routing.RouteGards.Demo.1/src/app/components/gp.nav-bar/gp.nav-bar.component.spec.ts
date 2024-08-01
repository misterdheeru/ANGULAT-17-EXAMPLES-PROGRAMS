import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpNavBarComponent } from './gp.nav-bar.component';

describe('GpNavBarComponent', () => {
  let component: GpNavBarComponent;
  let fixture: ComponentFixture<GpNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GpNavBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GpNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
