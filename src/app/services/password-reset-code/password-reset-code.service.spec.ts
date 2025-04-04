import { TestBed } from '@angular/core/testing';

import { PasswordResetCodeService } from './password-reset-code.service';

describe('PasswordResetCodeService', () => {
  let service: PasswordResetCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordResetCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
