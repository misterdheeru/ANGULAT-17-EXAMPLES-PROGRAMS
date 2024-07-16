import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPipComponent } from './custom.pip.component';

describe('CustomPipComponent', () => {
  let component: CustomPipComponent;
  let fixture: ComponentFixture<CustomPipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomPipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomPipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
