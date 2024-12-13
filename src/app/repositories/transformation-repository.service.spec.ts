import { TestBed } from '@angular/core/testing';

import { TransformationRepositoryService } from './transformation-repository.service';

describe('TransformationRepositoryService', () => {
  let service: TransformationRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransformationRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
