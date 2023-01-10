import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pharmacy } from 'src/app/common/pharmacy/pharmacy';
import { PharmacyService } from 'src/app/services/pharmacy.service';

@Component({
  selector: 'app-pharmacy-grid',
  templateUrl: './pharmacy-grid.component.html',
  styleUrls: ['./pharmacy-grid.component.css']
})
export class PharmacyGridComponent implements OnInit {

  pharmacies: Pharmacy[]=[];
  currentPharmacyId: number =1;


  constructor(private pharmacyService: PharmacyService,
    private route: ActivatedRoute){}
  ngOnInit(): void {
    this.listPharmacies();

  }
  listPharmacies(){
    this.pharmacyService.getPharmacyList().subscribe(
      data =>{
        this.pharmacies= data;
      }
    )
  }

}
