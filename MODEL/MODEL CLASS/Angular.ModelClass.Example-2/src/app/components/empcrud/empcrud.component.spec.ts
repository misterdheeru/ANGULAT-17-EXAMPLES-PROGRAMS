import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpcrudComponent } from './empcrud.component';

describe('EmpcrudComponent', () => {
  let component: EmpcrudComponent;
  let fixture: ComponentFixture<EmpcrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpcrudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
