import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.css'],
})
export class CartHeaderComponent implements OnInit {

  title = 'Shopping cart';
  numberItems: string = '4';
  constructor() {}

  ngOnInit(){
    // let square = this.numberItems * this.numberItems

  }
}
