import { Author } from './../components/models/Author';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  authors: Author[];
  constructor() {
    this.authors = [];
    this.authors.push(
      new Author(
        '../../assets/authors/stephenking.png',
        60,
        '4.6m',
        'Stephan King'
      )
    );
    this.authors.push(
      new Author('../../assets/authors/jk.jpg', 12, '1.8m', 'Joanne Rowling')
    );
    this.authors.push(
      new Author('../../assets/authors/rr.jpg', 30, '4.8m', 'Rick Riordan')
    );
    this.authors.push(
      new Author('../../assets/authors/eoin.jpg', 10, '1.2m', 'Eoin COlfer')
    );
    this.authors.push(
      new Author('../../assets/authors/jk.jpg', 12, '1.8m', 'Joanne Rowling')
    );
    this.authors.push(
      new Author('../../assets/authors/rr.jpg', 30, '4.8m', 'Rick Riordan')
    );
    this.authors.push(
      new Author('../../assets/authors/eoin.jpg', 10, '1.2m', 'Eoin COlfer')
    );
    this.authors.push(
      new Author('../../assets/authors/jk.jpg', 12, '1.8m', 'Joanne Rowling')
    );
    this.authors.push(
      new Author('../../assets/authors/rr.jpg', 30, '4.8m', 'Rick Riordan')
    );
    this.authors.push(
      new Author('../../assets/authors/eoin.jpg', 10, '1.2m', 'Eoin COlfer')
    );
    this.authors.push(
      new Author('../../assets/authors/jk.jpg', 12, '1.8m', 'Joanne Rowling')
    );
    this.authors.push(
      new Author('../../assets/authors/rr.jpg', 30, '4.8m', 'Rick Riordan')
    );
    this.authors.push(
      new Author('../../assets/authors/eoin.jpg', 10, '1.2m', 'Eoin COlfer')
    );
  }

  getAuthors = () => {
    return this.authors;
  };
}
