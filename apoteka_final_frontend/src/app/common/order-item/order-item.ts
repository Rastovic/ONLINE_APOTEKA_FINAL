import { Product } from "../product/product";

export class OrderItem {

    product_id: number;
    product_name: string;
    product_description:string;
    price: number;
    quantity: number;
    image_url: string;


    constructor(product : Product){
        this.product_id = product.id;
        this.product_name = product.productName;
        this.product_description = product.product_description;
        this.price = product.price;
        this.quantity = 1;
        this.image_url = product.image_url


    }





}
