import { Component, OnInit} from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent  implements OnInit{


  totalPrice: number = 0.00;
  totalQuantity: number = 0;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.updateOrderStatus();
    this.orderService.computeOrderTotal();
  }

  updateOrderStatus() {

    // subscribe to the cart totalPrice
    this.orderService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    // subscribe to the cart totalQuantity
    this.orderService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );
  }

}
