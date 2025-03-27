import { TestBed } from '@angular/core/testing';

import { PostPersonalService } from './post-personal.service';

describe('PostPersonalService', () => {
  let service: PostPersonalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostPersonalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
