import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotnetComponent } from './dotnet.component';

describe('DotnetComponent', () => {
  let component: DotnetComponent;
  let fixture: ComponentFixture<DotnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DotnetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DotnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
