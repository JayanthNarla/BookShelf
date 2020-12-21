import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bestselleritems',
  templateUrl: './bestselleritems.component.html',
  styleUrls: ['./bestselleritems.component.scss'],
})
export class BestselleritemsComponent implements OnInit {
  @Input() bs;
  constructor() {}

  ngOnInit(): void {}
}
