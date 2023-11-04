import { TestBed } from '@angular/core/testing';

import { BankInterceptor } from './bank.interceptor';

describe('BankInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BankInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BankInterceptor = TestBed.inject(BankInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
