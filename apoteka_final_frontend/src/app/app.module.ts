import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import {AddressTableComponent} from "./components/address/address-table.component";
import {HttpClientModule} from "@angular/common/http";
import { ProductService } from './services/product.service';
import {SidenavComponent} from "./components/nav-bar/nav-bar";
import {BodyComponent} from "./components/body/body";
import {RouterLink, RouterLinkActive, RouterOutlet,Routes} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {AddressService} from "./services/address.service";
import { PharmacyDetailsComponent } from './components/pharmacy-details/pharmacy-details.component';
import { PharmacyGridComponent } from './components/pharmacy-grid/pharmacy-grid.component';
import { PharmacyService } from './services/pharmacy.service';


const routes: Routes = [
  {path: 'pharmacies/:id', component: PharmacyDetailsComponent},
  {path: 'pharmacies', component: PharmacyGridComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductTableComponent,
    AddressTableComponent,
    SidenavComponent,
    BodyComponent,
    PharmacyGridComponent,
    PharmacyDetailsComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
],
  providers: [PharmacyService,ProductService, AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
