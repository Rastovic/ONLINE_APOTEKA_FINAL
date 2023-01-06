import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from "@angular/common/http"
import { ProductService } from './services/product.service';
import { PharmacyGridComponent } from './components/pharmacy-grid/pharmacy-grid.component';
import { PharmacyService } from './services/pharmacy.service';

import { Routes } from '@angular/router';
import { PharmacyDetailsComponent } from './components/pharmacy-details/pharmacy-details.component';

const routes: Routes = [
  {path: 'pharmacies/:id', component: PharmacyDetailsComponent},
  {path: 'pharmacies', component: PharmacyGridComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PharmacyGridComponent,
    PharmacyDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PharmacyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
