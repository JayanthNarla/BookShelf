import { FreeBooks } from './../components/models/FreeBooks';
import { Injectable } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class FreebooksService {
  freebooks: FreeBooks[];
  constructor() {
    this.freebooks = [];
    this.freebooks.push(
      new FreeBooks(
        '../../assets/book/pet_sem.jpg',
        'Pet Sematary',
        'Stephen King'
      )
    );
    this.freebooks.push(
      new FreeBooks(
        '../../assets/book/percy.jpg',
        'Percy Jackson',
        'Rick Riordan'
      )
    );
    this.freebooks.push(
      new FreeBooks(
        '../../assets/book/pet_sem.jpg',
        'Pet Sematary',
        'Stephen King'
      )
    );
    this.freebooks.push(
      new FreeBooks(
        '../../assets/book/percy.jpg',
        'Percy Jackson',
        'Rick Riordan'
      )
    );
  }

  getFreeBooks = () => {
    return this.freebooks;
  };
}
