import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-freebookitem',
  templateUrl: './freebookitem.component.html',
  styleUrls: ['./freebookitem.component.scss'],
})
export class FreebookitemComponent implements OnInit {
  @Input() freeBk;
  constructor() {}

  ngOnInit(): void {}
}
