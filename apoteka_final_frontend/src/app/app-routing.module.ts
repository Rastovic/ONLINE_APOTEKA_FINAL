import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductTableComponent} from "./components/product-table/product-table.component";


const routes: Routes = [
  {path: 'products', component: ProductTableComponent},
  {path: '**', redirectTo: 'products'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
