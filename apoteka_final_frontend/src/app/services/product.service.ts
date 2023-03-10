import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product/product';
import {map} from 'rxjs/operators'
import { Pharmacy } from '../common/pharmacy/pharmacy';
@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private baseUrl='http://localhost:8080/api/products'
  constructor(private httpClient: HttpClient) { }
  private pharmacyUrl ='http://localhost:8080/api/pharmacies'

  getProduct(theProductid: number):Observable<Product> {

    const productUrl=`${this.baseUrl}/${theProductid}`;
 
    return this.httpClient.get<Product>(productUrl);
   }

  getProductList():Observable<Product[]>{

    return this.httpClient.get<GetResponseProducts>(this.baseUrl).pipe(
      map(response => response._embedded.products)
     );
  }

  private getProducts(searchUrl: string): Observable<Product[]> {

    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(map(response => response._embedded.products));
  }

  searchProducts(theKeyword: string): Observable<Product[]> {

    // need to build URL based on the keyword
    const searchUrl = `${this.baseUrl}/search/findByProductNameContaining?productName=${theKeyword}`;

    return this.getProducts(searchUrl);

  }
 
  
 getProductListPharmacy(thePharmacyId: number):Observable<Product[]>{
  const searchUrl =`${this.baseUrl}/search/findByPharmacyId?id=${thePharmacyId}`;
   return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
     map(response => response._embedded.products)
 );
}


 

  getPharmacies():Observable<Pharmacy[]>{
    return this.httpClient.get<GetResponsePharmacy>(this.pharmacyUrl).pipe(
      map(response => response._embedded.pharmacy)
    );
  }

}
interface GetResponseProducts{
  _embedded: {
    products: Product[];
  }

}

interface GetResponsePharmacy{
  _embedded: {
    pharmacy : Pharmacy[];
  }
}
