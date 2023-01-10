
import { Customer } from "../customer/customer";
import { OrderItems } from "../order-items/order-items";
import { Order } from "../order/order";

export class Purchase {


  order: Order;
  orderItems: OrderItems[];
  customer: Customer;


}
