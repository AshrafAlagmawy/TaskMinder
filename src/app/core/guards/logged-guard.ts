import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LanguageService } from '../services/language';

export const loggedGuard: CanActivateFn = (route, state) => {
  const _Router = inject(Router);
  const _LanguageService = inject(LanguageService);

  if (typeof window !== 'undefined' && localStorage.getItem('userToken') !== null) {
    _Router.navigate(['/tasks']);
    _LanguageService.translateToLanguage(localStorage.getItem('language')!);

    return false;
  }
  return true;
};
