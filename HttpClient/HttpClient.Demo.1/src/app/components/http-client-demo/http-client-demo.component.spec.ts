import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientDemoComponent } from './http-client-demo.component';

describe('HttpClientDemoComponent', () => {
  let component: HttpClientDemoComponent;
  let fixture: ComponentFixture<HttpClientDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HttpClientDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
