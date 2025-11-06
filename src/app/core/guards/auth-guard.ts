import { inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

export const authGuard = () => {
  const router = inject(Router);

  if (typeof window !== 'undefined' && localStorage) {
    if (localStorage.getItem('userToken') !== null) return true;
  }

  router.navigate(['/login']);
  return false;
};
