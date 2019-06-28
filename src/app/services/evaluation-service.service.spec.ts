import { TestBed, inject } from '@angular/core/testing';

import { EvaluationServiceService } from './evaluation-service.service';

describe('EvaluationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EvaluationServiceService]
    });
  });

  it('should be created', inject([EvaluationServiceService], (service: EvaluationServiceService) => {
    expect(service).toBeTruthy();
  }));
});
