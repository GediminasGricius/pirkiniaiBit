import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  public products:Product[]=[];

  constructor() {
    this.products.push(new Product("Duona", 1));
    this.products.push(new Product("Pienas", 3));
    this.products.push(new Product("Ruginiai miltai", 1));
   }

  ngOnInit(): void {
  }

}
