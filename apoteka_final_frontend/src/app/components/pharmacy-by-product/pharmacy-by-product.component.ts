import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Pharmacy} from 'src/app/common/pharmacy/pharmacy';
import {PharmacyService} from 'src/app/services/pharmacy.service';

@Component({
  selector: 'app-pharmacy-by-product',
  templateUrl: './pharmacy-by-product.component.html',
  styleUrls: ['./pharmacy-by-product.component.css']
})
export class PharmacyByProductComponent implements OnInit {

  pharmacies: Pharmacy[] = [];
  currentProductId: number = 1;

  constructor(private pharmacyService: PharmacyService,
              private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listPharmacies();
    }); 
  }

  listPharmacies() {
    const hasProductId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasProductId) {
      this.currentProductId = +this.route.snapshot.paramMap.get('id')!;
    } else {
      this.currentProductId = 1;
    }
    this.pharmacyService.getPharmaciesListProdcut(this.currentProductId).subscribe(
      data => {
        this.pharmacies = data;
      }
    )
  }
}
