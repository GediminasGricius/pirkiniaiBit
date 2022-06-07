import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { FormsModule } from '@angular/forms';
import { ProductsStatisticsComponent } from './components/products-statistics/products-statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    NewProductComponent,
    ProductsStatisticsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
