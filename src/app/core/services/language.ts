import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(public translate: TranslateService) {}

  translateToLanguage(language: string) {
    if (language === 'en') {
      this.translate.use('en');
      document.documentElement.dir = 'ltr';
    } else {
      this.translate.use('ar');
      document.documentElement.dir = 'rtl';
    }
  }

  language = signal<string>('');

  changeLanguage(): void {
    const currentLanguage = this.translate.currentLang || 'en';

    if (currentLanguage === 'en') {
      localStorage.setItem('language', 'ar');
      this.language.set(localStorage.getItem('language')!);
      this.translateToLanguage(this.language());
    } else {
      localStorage.setItem('language', 'en');
      this.language.set(localStorage.getItem('language')!);
      this.translateToLanguage(this.language());
    }
  }
}
