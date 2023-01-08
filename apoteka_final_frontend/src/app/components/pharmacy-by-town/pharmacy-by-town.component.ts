import {Component, OnInit} from "@angular/core";
import {Address} from "../../common/address/address";
import {AddressService} from "../../services/address.service";
import {PharmacyService} from "../../services/pharmacy.service";
import {Pharmacy} from "../../common/pharmacy/pharmacy";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pharmacy-table',
  templateUrl: './pharmacy-by-town.component.html',
  styleUrls: ['./pharmacy-by-town.component.css']
})
export class PharmacyByTownComponent implements OnInit {

  pharmacies: Pharmacy[] = [];

  constructor(private pharmacyService: PharmacyService, private route:ActivatedRoute) {

  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>{
      this.allPharmaciesByTown();
    })
  }

  allPharmaciesByTown(){
    const town:string = this.route.snapshot.paramMap.get('town')!;
    this.pharmacyService.getPharmaciesByTown(town).subscribe((data) => {
      console.log(data);
      this.pharmacies = data;
    });

  }
}
