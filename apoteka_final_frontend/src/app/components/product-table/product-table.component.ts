import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  products: Product[] = [];
  searchMode: boolean = false;
  constructor(private productService: ProductService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() =>
   { this.listProducts();}

    );
  }
listProducts(){

  this.searchMode= this.route.snapshot.paramMap.has('keyword');


  if(this.searchMode){



    const theKeyword: string =  this.route.snapshot.paramMap.get('keyword')!;
    this.productService.searchProducts(theKeyword).subscribe(
     data=>{
       this.products=data;

   });


  }
  else{
    this.productService.getProductList().subscribe(
      data=>{
        this.products=data;
  }

  );


}



}
}
