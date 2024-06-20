import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  getGenres(): string[] {
    return [
      'Action',
      'Adventure',
      'Comedy',
      'Crime',
      'Drama',
      'Fantasy',
      'Historical',
      'Horror',
      'Mystery',
      'Philosophical',
      'Political',
      'Romance',
      'Saga',
      'Satire',
      'Science fiction',
      'Social',
      'Speculative',
      'Thriller',
      'Urban',
      'Western'
    ];
  }
}
