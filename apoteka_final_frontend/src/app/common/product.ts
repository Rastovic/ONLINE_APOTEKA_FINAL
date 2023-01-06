export class Product {

    constructor(

        public product_id: number,
        public product_name: string,
        public product_description: string,
        public price: number,
        public expiration_date: Date,
        public availability: boolean,
        public prescription: boolean,
        public supplier_id: number,
        public image_url: string

    ){}
}
