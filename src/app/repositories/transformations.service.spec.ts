import { TestBed } from '@angular/core/testing';

import { TransformationsService } from './transformations.service';

describe('TransformationsService', () => {
  let service: TransformationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransformationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
