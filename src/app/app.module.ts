import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { FormsModule } from '@angular/forms';
import { ProductsStatisticsComponent } from './components/products-statistics/products-statistics.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { ProductItemComponent } from './components/products-list/product-item/product-item.component';



const appRoutes:Routes=[
  {path:'', component:ProductsListComponent},
  {path:'new',component:NewProductComponent},
  {path:'update/:index',component:UpdateProductComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    NewProductComponent,
    ProductsStatisticsComponent,
    NavigationComponent,
    UpdateProductComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
