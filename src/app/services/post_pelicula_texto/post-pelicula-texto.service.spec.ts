import { TestBed } from '@angular/core/testing';

import { PostPeliculaTextoService } from './post-pelicula-texto.service';

describe('PostPeliculaTextoService', () => {
  let service: PostPeliculaTextoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostPeliculaTextoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
