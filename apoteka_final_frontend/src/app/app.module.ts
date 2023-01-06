import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import {AddressTableComponent} from "./components/address/address-table.component";
import {HttpClientModule} from "@angular/common/http"
import { ProductService } from './services/product.service';
import {SidenavComponent} from "./components/nav-bar/nav-bar";
import {BodyComponent} from "./components/body/body";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AddressService} from "./services/address.service";
@NgModule({
  declarations: [
    AppComponent,
    ProductTableComponent,
    AddressTableComponent,
    SidenavComponent,
    BodyComponent
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
  providers: [ProductService, AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
