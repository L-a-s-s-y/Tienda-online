import { Product } from "./product";
import { User } from "./user";

export class UserProduct {
    usuario:User = new User('', '', '', '', '', '', '', '', '');
    product:Product = new Product('', 0.0, '');
    num_unidades:number = 0;

    constructor(u:User, p:Product, n:number) {
        this.usuario = u;
        this.product = p;
        this.num_unidades = n;
    }
    
}