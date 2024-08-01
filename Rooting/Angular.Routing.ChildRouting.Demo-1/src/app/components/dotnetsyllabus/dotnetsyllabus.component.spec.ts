import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotnetsyllabusComponent } from './dotnetsyllabus.component';

describe('DotnetsyllabusComponent', () => {
  let component: DotnetsyllabusComponent;
  let fixture: ComponentFixture<DotnetsyllabusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DotnetsyllabusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DotnetsyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
