import { BestSellers } from './../components/models/BestSellers';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BestsellersService {
  bestsellers: BestSellers[];
  constructor() {
    this.bestsellers = [];
    this.bestsellers.push(
      new BestSellers(
        '../../assets/book/percy.jpg',
        'Percy Jackson',
        'Rick Riordan',
        9.8
      )
    );
    this.bestsellers.push(
      new BestSellers(
        '../../assets/book/pet_sem.jpg',
        'Pet Sematary',
        'Stephan King',
        9.0
      )
    );
    this.bestsellers.push(
      new BestSellers(
        '../../assets/book/The_Fault_in_Our_Stars.jpg',
        'The Fault in Out Stars',
        'John Green',
        9.6
      )
    );
    this.bestsellers.push(
      new BestSellers(
        '../../assets/book/percy.jpg',
        'Percy Jackson',
        'Rick Riordan',
        9.8
      )
    );
    this.bestsellers.push(
      new BestSellers(
        '../../assets/book/pet_sem.jpg',
        'Pet Sematary',
        'Stephan King',
        9.0
      )
    );
    this.bestsellers.push(
      new BestSellers(
        '../../assets/book/The_Fault_in_Our_Stars.jpg',
        'The Fault in Out Stars',
        'John Green',
        9.6
      )
    );
    this.bestsellers.push(
      new BestSellers(
        '../../assets/book/percy.jpg',
        'Percy Jackson',
        'Rick Riordan',
        9.8
      )
    );
    this.bestsellers.push(
      new BestSellers(
        '../../assets/book/pet_sem.jpg',
        'Pet Sematary',
        'Stephan King',
        9.0
      )
    );
    this.bestsellers.push(
      new BestSellers(
        '../../assets/book/The_Fault_in_Our_Stars.jpg',
        'The Fault in Out Stars',
        'John Green',
        9.6
      )
    );
  }

  getBestSellers = () => {
    return this.bestsellers;
  };
}
