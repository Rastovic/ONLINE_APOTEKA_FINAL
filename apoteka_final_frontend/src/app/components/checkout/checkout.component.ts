import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderItem } from 'src/app/common/order-item/order-item';
import { OrderItems } from 'src/app/common/order-items/order-items';
import { Order } from 'src/app/common/order/order';
import { Purchase } from 'src/app/common/purchase/purchase';
import { CheckoutService } from 'src/app/services/checkout.service';
import { OrderService } from 'src/app/services/order.service';

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
        firstName: [''],
        lastName: [''],
        email: [''],
        phoneNumber:[''],
        address:['']
      })

  });




}
get firstName() { return this.checkoutFormGroup.get('customer.firstName'); }
get lastName() { return this.checkoutFormGroup.get('customer.lastName'); }
get email() { return this.checkoutFormGroup.get('customer.email'); }
get phoneNumber() { return this.checkoutFormGroup.get('customer.phoneNumber'); }
get address() { return this.checkoutFormGroup.get('customer.address'); }

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
          alert(`Your order has been received.\nOrder tracking number: ${response.orderTrackingNumber}`);

          // reset cart
          this.resetCart();

        },
        error: err => {
          alert(`There was an error: ${err.message}`);
        }
      }
    );
}

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
