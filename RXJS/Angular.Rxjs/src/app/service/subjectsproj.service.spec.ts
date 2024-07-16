import { TestBed } from '@angular/core/testing';

import { SubjectsprojService } from './subjectsproj.service';

describe('SubjectsprojService', () => {
  let service: SubjectsprojService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectsprojService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
