import { TestBed } from '@angular/core/testing';

import { EmployeeCrudeService } from './employee-crude.service';

describe('EmployeeCrudeService', () => {
  let service: EmployeeCrudeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeCrudeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
