import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { cartsguardGuard } from './cartsguard.guard';

describe('cartsguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => cartsguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
