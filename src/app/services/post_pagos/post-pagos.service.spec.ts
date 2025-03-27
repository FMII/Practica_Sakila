import { TestBed } from '@angular/core/testing';

import { PostPagosService } from './post-pagos.service';

describe('PostPagosService', () => {
  let service: PostPagosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostPagosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
