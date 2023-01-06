import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pharmacy } from 'src/app/common/pharmacy/pharmacy';
import { PharmacyService } from 'src/app/services/pharmacy.service';

@Component({
  selector: 'app-pharmacy-details',
  templateUrl: './pharmacy-details.component.html',
  styleUrls: ['./pharmacy-details.component.css']
})
export class PharmacyDetailsComponent implements OnInit{

  pharmacy!: Pharmacy;


  constructor(private pharmacyService: PharmacyService,
    private route:ActivatedRoute){}

  ngOnInit(): void {
   this.route.paramMap.subscribe(()=>{
    this.handlePharmacyDetails();
   })
  }
  handlePharmacyDetails() {
   const thePharmacyid:number= + this.route.snapshot.paramMap.get('id')!;
   this.pharmacyService.getPharmacy(thePharmacyid).subscribe(
    data=> {
      this.pharmacy=data;
    }
    )
  }


}
