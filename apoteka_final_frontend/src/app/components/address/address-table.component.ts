import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/common/address/address';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-address-table',
  templateUrl: './address-table.component.html',
  styleUrls: ['./address-table.component.css']
})
export class AddressTableComponent implements OnInit {

  addresses: Address[] = [];
  constructor(private addressService: AddressService) { }

  ngOnInit(): void {
    this.listAddresses();
  }
  listAddresses(){
   this.addressService.getAddressList().subscribe(
     data=>{
       this.addresses=data;
       //console.log(data);

     }
   )
  }

}
