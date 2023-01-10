import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Address } from 'src/app/common/address/address';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-address-pharmacy',
  templateUrl: './address-pharmacy.component.html',
  styleUrls: ['./address-pharmacy.component.css']
})
export class AddressPharmacyComponent implements OnInit{

  
address! : Address;


currentPharmacyId: number=1;
  constructor(private addressService: AddressService,
    private route:ActivatedRoute){}


  ngOnInit(): void {
    this.route.paramMap.subscribe(() =>{
      this.Address();
    });

  }

Address(){
  const hasPharmacyId: boolean = this.route.snapshot.paramMap.has('id');

  if (hasPharmacyId){
    this.currentPharmacyId= +this.route.snapshot.paramMap.get('id')!;
  }
  else{
    this.currentPharmacyId=1;
  }


  this.addressService.getAddressPharmacy(this.currentPharmacyId).subscribe(
    data => {
      this.address = data;
    }
  )
}
}
