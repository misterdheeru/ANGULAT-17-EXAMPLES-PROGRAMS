import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatascienceComponent } from './datascience.component';

describe('DatascienceComponent', () => {
  let component: DatascienceComponent;
  let fixture: ComponentFixture<DatascienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatascienceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatascienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
