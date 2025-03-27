import { TestBed } from '@angular/core/testing';

import { PostPeliculaCategoriaService } from './post-pelicula-categoria.service';

describe('PostPeliculaCategoriaService', () => {
  let service: PostPeliculaCategoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostPeliculaCategoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
