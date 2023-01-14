import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../common/address/address';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AddressService {

  getAddressPharmacy(thePharmacyId: number) {
    const searchUrl =`${this.baseUrl}/search/findByPharmacyId?id=${thePharmacyId}`;
    return this.httpClient.get<Address>(searchUrl);
  }

  private baseUrl='http://localhost:8080/api/address'
  constructor(private httpClient: HttpClient) { }
  getAddressList():Observable<Address[]>{
    return this.httpClient.get<GetResponse>(`${this.baseUrl}/search/findAllDistinctTowns`).pipe(
      map(response => response._embedded.address)
    );
  }

  getAddress(theAddressid: number):Observable<Address> {

    const addressUrl=`${this.baseUrl}/${theAddressid}`;

    return this.httpClient.get<Address>(addressUrl);
   }
}
interface GetResponse{
  _embedded: {
    address: Address[];
  }
}
