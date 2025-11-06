import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loggedGuard: CanActivateFn = (route, state) => {
  const _Router = inject(Router);

  if (typeof window !== 'undefined' && localStorage.getItem('userToken') !== null) {
    _Router.navigate(['/tasks']);
    return false;
  }
  return true;
};
