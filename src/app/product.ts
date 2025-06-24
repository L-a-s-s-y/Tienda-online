export class Product {
    nombre:string = '';
    precio:number = 0.0;
    url_imagen:string = '';
    
    constructor(n:string, p:number, url:string) {
        this.nombre = n;
        this.precio = p;
        this.url_imagen = url;
    }
}