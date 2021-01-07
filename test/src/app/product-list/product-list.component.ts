import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products : Product[] = [
    {
      id:'1',
      name:'Giày Adidas',
      description:'phong cách thời trang',
      thumbnail:'/assets/m2k-tekno-phantom-1-600x600.jpeg',
      price:5.99,
      quantity:2
    },
    {
      id:'2',
      name:'Giày PuMA',
      description:'Phong cách năng động',
      thumbnail:'/assets/adidas.jpeg',
      price:9.99,
      quantity:1
    },
    {
      id:'3',
      name:'Giày Adidas',
      description:'phong cách thời trang',
      thumbnail:'/assets/m2k-tekno-phantom-1-600x600.jpeg',
      price:5.99,
      quantity:2
    }
  ]

  constructor() { }

  ngOnInit() {

  }


}
