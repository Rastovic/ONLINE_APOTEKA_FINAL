import { Component,OnInit } from '@angular/core';
import { OrderItem } from 'src/app/common/order-item/order-item';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit{
  orderItem: OrderItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private orderService: OrderService) { }


  ngOnInit(): void {
    this.listCartDetails();
  }

  listCartDetails() {

    // get a handle to the cart items
    this.orderItem= this.orderService.orderItem;

    // subscribe to the cart totalPrice
    this.orderService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    // subscribe to the cart totalQuantity
    this.orderService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );

    // compute cart total price and quantity
    this.orderService.computeOrderTotal();
  }

}
