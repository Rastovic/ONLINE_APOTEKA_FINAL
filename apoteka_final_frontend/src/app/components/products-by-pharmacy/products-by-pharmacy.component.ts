import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pharmacy } from 'src/app/common/pharmacy/pharmacy';
import { Product } from 'src/app/common/product/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-by-pharmacy',
  templateUrl: './products-by-pharmacy.component.html',
  styleUrls: ['./products-by-pharmacy.component.css']
})
export class ProductsByPharmacyComponent  implements OnInit {

products : Product[]=[];
currentPharmacyId: number=1;
  constructor(private productService: ProductService,
    private route:ActivatedRoute){}


  ngOnInit(): void {
    this.route.paramMap.subscribe(() =>{
      this.listProducts();
    });
    
  }

listProducts(){
  const hasPharmacyId: boolean = this.route.snapshot.paramMap.has('id');

  if (hasPharmacyId){
    this.currentPharmacyId= +this.route.snapshot.paramMap.get('id')!;
  }
  else{
    this.currentPharmacyId=1;
  }


  this.productService.getProductListPharmacy(this.currentPharmacyId).subscribe(
    data => {
      this.products = data;
    }
  )
}
}
