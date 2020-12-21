import { AuthorService } from './../../services/author.service';
import { Author } from './../models/Author';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
})
export class AuthorsComponent implements OnInit {
  authors: Author[];
  constructor(private as: AuthorService) {
    this.authors = as.getAuthors();
  }

  ngOnInit(): void {}
}
