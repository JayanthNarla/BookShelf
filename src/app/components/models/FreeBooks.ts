import { stringify } from 'querystring';

export class FreeBooks {
  cover: string;
  title: string;
  author: string;
  constructor(cover?: string, title?: string, author?: string) {
    this.cover = cover;
    this.title = title;
    this.author = author;
  }
}
