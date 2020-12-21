export class Author {
  profile: string;
  books: number;
  reads: string;
  name: string;
  constructor(profile?: string, books?: number, reads?: string, name?: string) {
    this.profile = profile;
    this.books = books;
    this.reads = reads;
    this.name = name;
  }
}
