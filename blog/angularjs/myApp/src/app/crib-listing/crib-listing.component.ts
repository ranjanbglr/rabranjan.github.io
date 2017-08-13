import { Component, OnInit } from '@angular/core';
import { cribs } from  './../data/cribs';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  // Here we are defining cribs of array type
  // And importing and assigning cribs data to it
  cribs: Array<any> = cribs;
  constructor() { }

  ngOnInit() {
  }

}
