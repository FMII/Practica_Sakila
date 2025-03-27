import { TestBed } from '@angular/core/testing';

import { PostPeliculaActorService } from './post-pelicula-actor.service';

describe('PostPeliculaActorService', () => {
  let service: PostPeliculaActorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostPeliculaActorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
