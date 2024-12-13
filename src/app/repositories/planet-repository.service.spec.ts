import { TestBed } from '@angular/core/testing';

import { PlanetRepositoryService } from './planet-repository.service';

describe('PlanetRepositoryService', () => {
  let service: PlanetRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanetRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
