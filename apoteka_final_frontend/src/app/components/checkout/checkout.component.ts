import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderItem } from 'src/app/common/order-item/order-item';
import { OrderItems } from 'src/app/common/order-items/order-items';
import { Order } from 'src/app/common/order/order';
import { Purchase } from 'src/app/common/purchase/purchase';
import { CheckoutService } from 'src/app/services/checkout.service';
import { OrderService } from 'src/app/services/order.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  checkoutFormGroup: FormGroup;

  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private formBuilder: FormBuilder,private orderService:OrderService
    ,private checkoutService: CheckoutService,private route:Router) { }

  ngOnInit(): void {

    this.reviewCartDetails();

    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: new FormControl('',[Validators.required,Validators.minLength(2)]),
        lastName: new FormControl('',[Validators.required,Validators.minLength(2)]),
        email: new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
        phoneNumber:new FormControl('',[Validators.required,Validators.minLength(9)]),
        address:new FormControl('',[Validators.required,Validators.minLength(2)])
      })

  });




}
get firstName() { return this.checkoutFormGroup.get('customer.firstName'); }
get lastName() { return this.checkoutFormGroup.get('customer.lastName'); }
get email() { return this.checkoutFormGroup.get('customer.email'); }
get phoneNumber() { return this.checkoutFormGroup.get('customer.phoneNumber'); }
get address() { return this.checkoutFormGroup.get('customer.address'); }

reviewCartDetails() {

  // subscribe to cartService.totalQuantity
  this.orderService.totalQuantity.subscribe(
    totalQuantity => this.totalQuantity = totalQuantity
  );

  // subscribe to cartService.totalPrice
  this.orderService.totalPrice.subscribe(
    totalPrice => this.totalPrice = totalPrice
  );

}


onSubmit() {
  console.log("Handling the submit button");




  if (this.checkoutFormGroup.invalid) {
    this.checkoutFormGroup.markAllAsTouched();
    return;
  }

  // set up order
  let order = new Order();
  order.totalPrice = this.totalPrice;
  order.totalQuantity = this.totalQuantity;

  // get cart items
  const orderItem = this.orderService.orderItem;

  // - short way of doing the same thingy
  let orderItems: OrderItems[] = orderItem.map(tempOrderitem =>new OrderItems(tempOrderitem));

  // set up purchase
  let purchase = new Purchase();

  // populate purchase - customer
  purchase.customer = this.checkoutFormGroup.controls['customer'].value;

    purchase.order = order;
    purchase.orderItems = orderItems;

    // call REST API via the CheckoutService
    this.checkoutService.placeOrder(purchase).subscribe({
        next: response => {
          Swal.fire("Order Successful",`Your order tracking number is: ${response.orderTrackingNumber} `,"success");


          // reset cart
          this.resetCart();

        },
        error: err => {
          Swal.fire("There was an error",`${err.message}`,"error");
        }
      }
    );
}


resetCart(){

  this.orderService.orderItem = [];
    this.orderService.totalPrice.next(0);
    this.orderService.totalQuantity.next(0);

    // reset the form
    this.checkoutFormGroup.reset();

    // navigate back to the products page
    this.route.navigateByUrl("/products");
}


}
