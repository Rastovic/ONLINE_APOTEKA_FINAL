import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pharmacy } from '../common/pharmacy/pharmacy';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {

  private baseUrl='http://localhost:8080/api/pharmacies'
  constructor(private httpClient: HttpClient) { }

  getPharmaciesListProdcut(theProductId: number):Observable<Pharmacy[]> {
    const searchUrl =`${this.baseUrl}/search/findByProductId?id=${theProductId}`;
    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response => response._embedded.pharmacies)
  );
  }

  getPharmacy(thePharmacyid: number):Observable<Pharmacy> {

   const pharmacyUrl=`${this.baseUrl}/${thePharmacyid}`;

   return this.httpClient.get<Pharmacy>(pharmacyUrl);
  }
  getPharmacyList(): Observable<Pharmacy[]>{
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.pharmacies)
    )
  }

  getPharmaciesByTown(town: string): Observable<Pharmacy[]>{
    return this.httpClient.get<GetResponse>(`${this.baseUrl}/search/findAllByAddress_Town?town=${town}`).pipe(
      map(response => response._embedded.pharmacies)
    )
  }
}
interface GetResponse{
  _embedded: {
    pharmacies : Pharmacy[];
  }
}
