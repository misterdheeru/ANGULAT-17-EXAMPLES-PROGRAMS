import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathparamComponent } from './pathparam.component';

describe('PathparamComponent', () => {
  let component: PathparamComponent;
  let fixture: ComponentFixture<PathparamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PathparamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PathparamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
