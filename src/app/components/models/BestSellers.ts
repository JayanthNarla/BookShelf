export class BestSellers {
  cover: string;
  title: string;
  author: string;
  rating: number;
  constructor(
    cover?: string,
    title?: string,
    author?: string,
    rating?: number
  ) {
    this.cover = cover;
    this.title = title;
    this.author = author;
    this.rating = rating;
  }
}
