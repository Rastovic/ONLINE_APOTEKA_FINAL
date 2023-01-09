import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { OrderItem } from '../common/order-item/order-item';
import { Product } from '../common/product/product';

@Injectable({
  providedIn: 'root'
})
export class OrderService {




  orderItem: OrderItem[];

  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() {
    this.orderItem = JSON.parse(sessionStorage.getItem('cartItems')) != null ? JSON.parse(sessionStorage.getItem('cartItems')):[];
  }

  addToOrder(theOrderItem:OrderItem){
    let alreadyExistsInOrder: boolean = false;
    let existingOrderItem : OrderItem = undefined;

    if(this.orderItem.length>0){
      existingOrderItem = this.orderItem.find(tempOrderItem => tempOrderItem.product_id === theOrderItem.product_id);


     alreadyExistsInOrder = (existingOrderItem != undefined);

    }
    if(alreadyExistsInOrder){
        existingOrderItem.quantity++;
    }
    else{
      this.orderItem.push(theOrderItem);
    }

    this.computeOrderTotal();
    this.alertSuccess();



  }

  computeOrderTotal() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for (let currentOrderItem of this.orderItem) {
      totalPriceValue += currentOrderItem.quantity * currentOrderItem.price;
      totalQuantityValue += currentOrderItem.quantity;
    }

    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);


    this.logOrderData(totalPriceValue, totalQuantityValue);
    this.persistCartItems();



  }
  logOrderData(totalPriceValue: number, totalQuantityValue: number) {

    console.log('Contents of the order');
    for (let tempOrderItem of this.orderItem) {
      const subTotalPrice = tempOrderItem.quantity * tempOrderItem.price;
      console.log(`name: ${tempOrderItem.product_name}, quantity=${tempOrderItem.quantity}, unitPrice=${tempOrderItem.price}, subTotalPrice=${subTotalPrice}`);
    }

    console.log(`totalPrice: ${totalPriceValue.toFixed(2)}, totalQuantity: ${totalQuantityValue}`);
    console.log('----');

  }

  persistCartItems(){
    sessionStorage.setItem('orderItem', JSON.stringify(this.orderItem));
  }

  decrementQuantity(theOrderItem: OrderItem) {
    theOrderItem.quantity--;

    if(theOrderItem.quantity===0){
      this.remove(theOrderItem);
    }
    else{
      this.computeOrderTotal();
    }


  }
  remove(theOrderItem: OrderItem) {
      const itemIndex = this.orderItem.findIndex(tempOrderItem=>tempOrderItem.product_id === theOrderItem.product_id);

      if(itemIndex > -1){
        this.orderItem.splice(itemIndex,1);
        this.computeOrderTotal()
      }
  }

  alertSuccess(){
    for (let tempOrderItem of this.orderItem) {
    Swal.fire("Thank You",` ${tempOrderItem.product_name} has been added to your order`,"success");}
  }
}


