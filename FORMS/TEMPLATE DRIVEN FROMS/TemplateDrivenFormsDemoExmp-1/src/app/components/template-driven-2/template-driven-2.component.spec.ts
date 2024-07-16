import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDriven2Component } from './template-driven-2.component';

describe('TemplateDriven2Component', () => {
  let component: TemplateDriven2Component;
  let fixture: ComponentFixture<TemplateDriven2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDriven2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateDriven2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
