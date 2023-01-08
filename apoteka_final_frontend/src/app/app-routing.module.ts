import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductTableComponent} from "./components/product-table/product-table.component";
import {AddressTableComponent} from "./components/address/address-table.component";
import {PharmacyGridComponent} from "./components/pharmacy-grid/pharmacy-grid.component";
import {PharmacyDetailsComponent} from "./components/pharmacy-details/pharmacy-details.component";
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import {PharmacyByTownComponent} from "./components/pharmacy-by-town/pharmacy-by-town.component";


const routes: Routes = [
  {path: 'search/:keyword', component: ProductTableComponent},
  {path: 'products', component: ProductTableComponent},
  {path: 'addresses', component: AddressTableComponent},
  {path: 'pharmacies/:id', component: PharmacyDetailsComponent},
  {path: 'pharmacies/:id/products/:product_id', component: ProductDetailsComponent},
  {path: 'pharmacies/town/:town', component: PharmacyByTownComponent},
  {path: 'pharmacies', component: PharmacyGridComponent},
  {path: '**', redirectTo: 'pharmacies'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
