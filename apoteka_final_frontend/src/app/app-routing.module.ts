import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductTableComponent} from "./components/product-table/product-table.component";
import {AddressTableComponent} from "./components/address/address-table.component";


const routes: Routes = [
  {path: 'products', component: ProductTableComponent},
  {path: 'addresses', component: AddressTableComponent},
  {path: '**', redirectTo: 'products'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
