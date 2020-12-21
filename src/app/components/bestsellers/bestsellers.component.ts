import { BestsellersService } from './../../services/bestsellers.service';
import { BestSellers } from './../models/BestSellers';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrls: ['./bestsellers.component.scss'],
})
export class BestsellersComponent implements OnInit {
  bestsellers: BestSellers[];
  constructor(private bs: BestsellersService) {
    this.bestsellers = bs.getBestSellers();
  }

  ngOnInit(): void {}
}
