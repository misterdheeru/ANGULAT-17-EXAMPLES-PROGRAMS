import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownPipComponent } from './dropdown-pip.component';

describe('DropdownPipComponent', () => {
  let component: DropdownPipComponent;
  let fixture: ComponentFixture<DropdownPipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownPipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownPipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
