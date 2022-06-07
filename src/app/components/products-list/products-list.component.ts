import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  public products:Product[]=[];

  constructor(private productsService:ProductsService) {
    
    
   }

  ngOnInit(): void {
    this.products=this.productsService.products;
  }

  public deleteProduct(n:number){
    this.productsService.deleteProduct(n);
  }

}
