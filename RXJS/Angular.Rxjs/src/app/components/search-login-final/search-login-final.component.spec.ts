import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLoginFinalComponent } from './search-login-final.component';

describe('SearchLoginFinalComponent', () => {
  let component: SearchLoginFinalComponent;
  let fixture: ComponentFixture<SearchLoginFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchLoginFinalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchLoginFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
