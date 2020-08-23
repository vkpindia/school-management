import { TestBed } from '@angular/core/testing';

import { ExamSchedulingService } from './exam-scheduling.service';

describe('ExamSchedulingService', () => {
  let service: ExamSchedulingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamSchedulingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
