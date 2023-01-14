import { OrderItem } from "../order-item/order-item";

export class OrderItems {


  imageUrl: string;
  unitPrice: number;
  quantity: number;
  productId: number;

  constructor(orderItem: OrderItem) {
      this.imageUrl = orderItem.image_url;
      this.quantity = orderItem.quantity;
      this.unitPrice = orderItem.price;
      this.productId = orderItem.product_id;
  }



}
