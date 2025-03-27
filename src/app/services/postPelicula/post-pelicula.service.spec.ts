import { TestBed } from '@angular/core/testing';

import { PostPeliculaService } from './post-pelicula.service';

describe('PostPeliculaService', () => {
  let service: PostPeliculaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostPeliculaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
