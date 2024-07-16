import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelInterfaceComponent } from './model-interface.component';

describe('ModelInterfaceComponent', () => {
  let component: ModelInterfaceComponent;
  let fixture: ComponentFixture<ModelInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelInterfaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
