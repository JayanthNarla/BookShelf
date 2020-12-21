export class Book {
  rating: number;
  title: string;
  author: string;
  desc: string;
  bookCover: string;
  constructor(
    rating: number,
    title: string,
    author: string,
    desc: string,
    bookCover: string
  ) {
    rating = this.rating;
    title = this.title;
    author = this.author;
    desc = this.desc;
    bookCover = this.bookCover;
  }
}
