import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import {AddressTableComponent} from "./components/address/address-table.component";
import {HttpClientModule} from "@angular/common/http";
import { ProductService } from './services/product.service';
import {SidenavComponent} from "./components/nav-bar/nav-bar";
import {BodyComponent} from "./components/body/body";
import {RouterLink, RouterLinkActive, RouterModule, RouterOutlet, Routes} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {AddressService} from "./services/address.service";
import { PharmacyDetailsComponent } from './components/pharmacy-details/pharmacy-details.component';
import { PharmacyGridComponent } from './components/pharmacy-grid/pharmacy-grid.component';
import { PharmacyService } from './services/pharmacy.service';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SearchComponent } from './components/search/search.component';
import { ProductsByPharmacyComponent } from './components/products-by-pharmacy/products-by-pharmacy.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductTableComponent,
    AddressTableComponent,
    SidenavComponent,
    BodyComponent,
    PharmacyGridComponent,
    PharmacyDetailsComponent,
    SearchComponent,
    ProductsByPharmacyComponent,
    ProductDetailsComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    AppRoutingModule,
    BrowserAnimationsModule
],
  providers: [PharmacyService,ProductService, AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
