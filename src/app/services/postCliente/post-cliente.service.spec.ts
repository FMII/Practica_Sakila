import { TestBed } from '@angular/core/testing';

import { PostClienteService } from './post-cliente.service';

describe('PostClienteService', () => {
  let service: PostClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
