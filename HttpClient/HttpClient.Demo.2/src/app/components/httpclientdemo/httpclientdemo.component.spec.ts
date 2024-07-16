import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpclientdemoComponent } from './httpclientdemo.component';

describe('HttpclientdemoComponent', () => {
  let component: HttpclientdemoComponent;
  let fixture: ComponentFixture<HttpclientdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpclientdemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpclientdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
