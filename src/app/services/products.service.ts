import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public products:Product[]=[];
  
  constructor() { 
    this.products.push(new Product("Duona", 1));
    this.products.push(new Product("Pienas", 3));
    this.products.push(new Product("Ruginiai miltai", 3));
  }

  public addProduct(name:string, quantity:number){
    this.products.push(new Product(name, quantity));
  }
}