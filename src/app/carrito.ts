import { Product } from "./product";
import { User } from "./user";
import { UserProduct } from "./user_product";

export class Carrito {
    carrito:UserProduct[] = [];
    precio:number = 0;

    constructor(c:UserProduct[], p:number) {
        this.carrito = c;
        this.precio = p;
    }
}