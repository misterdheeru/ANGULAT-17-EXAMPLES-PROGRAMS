import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpAboutComponent } from './gp.about.component';

describe('GpAboutComponent', () => {
  let component: GpAboutComponent;
  let fixture: ComponentFixture<GpAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GpAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GpAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
