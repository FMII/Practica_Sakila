import { TestBed } from '@angular/core/testing';

import { PeliculaActorService } from './pelicula-actor.service';

describe('PeliculaActorService', () => {
  let service: PeliculaActorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliculaActorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
