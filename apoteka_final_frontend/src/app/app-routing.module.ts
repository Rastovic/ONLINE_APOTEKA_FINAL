import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductTableComponent} from "./components/product-table/product-table.component";
import {AddressTableComponent} from "./components/address/address-table.component";
import {PharmacyGridComponent} from "./components/pharmacy-grid/pharmacy-grid.component";
import {PharmacyDetailsComponent} from "./components/pharmacy-details/pharmacy-details.component";


const routes: Routes = [
  {path: 'products', component: ProductTableComponent},
  {path: 'addresses', component: AddressTableComponent},
  {path: 'pharmacies/:id', component: PharmacyDetailsComponent},
  {path: 'pharmacies', component: PharmacyGridComponent},
  {path: '**', redirectTo: 'pharmacies'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
