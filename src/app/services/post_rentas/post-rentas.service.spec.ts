import { TestBed } from '@angular/core/testing';

import { PostRentasService } from './post-rentas.service';

describe('PostRentasService', () => {
  let service: PostRentasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostRentasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
