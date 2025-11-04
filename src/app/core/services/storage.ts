import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  setItem(key: string, value: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      console.log('There is an error with saving data');
    }
  }

  getItem<T>(key: string): T | null {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.log('There is an error with getting data');
      return null;
    }
  }

  removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.log('There is an error with removing the item');
    }
  }

  clearLocalStorage(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.log('There is an error with clearing the local storage');
    }
  }
}
