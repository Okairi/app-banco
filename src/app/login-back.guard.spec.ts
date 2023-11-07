import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { loginBackGuard } from './login-back.guard';

describe('loginBackGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => loginBackGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
