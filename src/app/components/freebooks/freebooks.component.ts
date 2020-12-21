import { FreebooksService } from './../../services/freebooks.service';
import { FreeBooks } from './../models/FreeBooks';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-freebooks',
  templateUrl: './freebooks.component.html',
  styleUrls: ['./freebooks.component.scss'],
})
export class FreebooksComponent implements OnInit {
  freeBks: FreeBooks[];
  constructor(private fb: FreebooksService) {
    this.freeBks = fb.getFreeBooks();
  }

  ngOnInit(): void {}
}
