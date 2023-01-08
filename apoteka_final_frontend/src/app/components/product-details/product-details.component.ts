import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;

  constructor(private productService: ProductService,
    private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>{
      this.handleProductDetails();
     })
  }
  handleProductDetails() {
    const theProductid:number= + this.route.snapshot.paramMap.get('product_id')!;
    this.productService.getProduct(theProductid).subscribe(
     data=> {
       this.product=data;
     }
     )
   }
}
