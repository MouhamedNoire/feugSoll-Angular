import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductDetailComponent} from "./product/product-detail/product-detail.component";

export const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'product-detail/:id',
    component: ProductDetailComponent
  }
];
