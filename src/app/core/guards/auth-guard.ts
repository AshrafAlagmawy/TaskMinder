import { inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { LanguageService } from '../services/language';

export const authGuard = () => {
  const _Router = inject(Router);
  const _LanguageService = inject(LanguageService);

  if (typeof window !== 'undefined' && localStorage.getItem('userToken') !== null) return true;

  _Router.navigate(['/login']);
  return false;
};
