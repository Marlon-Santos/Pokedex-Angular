import { TestBed } from '@angular/core/testing';

import { PokesService } from './pokes.service';

describe('PokesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokesService = TestBed.get(PokesService);
    expect(service).toBeTruthy();
  });
});
