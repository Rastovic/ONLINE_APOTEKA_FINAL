export class Pharmacy {

    constructor(
        public id: number,
        public pharmacyname: string,
        public working_hours: Date,
        public user_name: string,
        public user_password: string,
        public product_id: number,
        public address_id: number,
        public image_url: string,
        public mapa: string

    ){}
}
