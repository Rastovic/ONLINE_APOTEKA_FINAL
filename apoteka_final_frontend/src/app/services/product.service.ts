import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product/product';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private baseUrl='http://localhost:8080/api/products'
  constructor(private httpClient: HttpClient) { }


  getProductList():Observable<Product[]>{
    return this.httpClient.get<GetResponseProducts>(this.baseUrl).pipe(
      map(response => response._embedded.products)
    );
  }

  searchProducts(theKeyword: string): Observable<Product[]> {

    // need to build URL based on the keyword
    const searchUrl = `${this.baseUrl}/search/findByProductNameContaining?productName=${theKeyword}`;
    this.getProductList()
    return this.getProducts(searchUrl);

  }


  private getProducts(searchUrl: string): Observable<Product[]> {
    this.getProductList()
    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(map(response => response._embedded.products));
  }


}
interface GetResponseProducts{
  _embedded: {
    products: Product[];
  }
}
