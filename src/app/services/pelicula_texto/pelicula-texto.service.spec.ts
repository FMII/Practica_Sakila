import { TestBed } from '@angular/core/testing';

import { PeliculaTextoService } from './pelicula-texto.service';

describe('PeliculaTextoService', () => {
  let service: PeliculaTextoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliculaTextoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
