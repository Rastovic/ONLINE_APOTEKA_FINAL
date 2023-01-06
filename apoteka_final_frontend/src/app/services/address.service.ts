import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../common/address/address';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private baseUrl='http://localhost:8080/api/address'
  constructor(private httpClient: HttpClient) { }
  getAddressList():Observable<Address[]>{
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.address)
    );
  }

}
interface GetResponse{
  _embedded: {
    address: Address[];
  }
}
