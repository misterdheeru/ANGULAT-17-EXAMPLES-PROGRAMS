import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParrentComponent } from './parrent.component';

describe('ParrentComponent', () => {
  let component: ParrentComponent;
  let fixture: ComponentFixture<ParrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParrentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
