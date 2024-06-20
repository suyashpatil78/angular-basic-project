import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  get(key: string): any {
    const value = localStorage.getItem(key);

    if (value) {
      return JSON.parse(value);
    }

    return null;
  }

  set(key: string, value: any): void {
    return localStorage.setItem(key, JSON.stringify(value));
  }
}
