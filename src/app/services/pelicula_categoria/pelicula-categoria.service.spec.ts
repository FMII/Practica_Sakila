import { TestBed } from '@angular/core/testing';

import { PeliculaCategoriaService } from './pelicula-categoria.service';

describe('PeliculaCategoriaService', () => {
  let service: PeliculaCategoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliculaCategoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
