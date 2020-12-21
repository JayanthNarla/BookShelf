import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-authoritem',
  templateUrl: './authoritem.component.html',
  styleUrls: ['./authoritem.component.scss'],
})
export class AuthoritemComponent implements OnInit {
  @Input() auth;
  constructor() {}

  ngOnInit(): void {}
}
