import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carrito } from './carrito';
import { User } from './user';
import { UserProduct } from './user_product';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  carrito:UserProduct[] = [];
  precio:number = 0;

constructor(private httpClient:HttpClient) { }

addProductoCarrito(pc:UserProduct) {
  this.carrito.push(pc);
}

borrarProductoCarrito(pos:number) {
  this.carrito.splice(pos, 1);
}

confirmarCompra() {
  let c:Carrito = new Carrito(this.carrito, this.precio);
  this.httpClient.post('https://tbw2122-3-default-rtdb.europe-west1.firebasedatabase.app/compras.json', c).subscribe(
    response => console.log('Se han subido los archivos: ' + response),
    error => console.log('Error: ' + error)
  );
}

setPrecio(p:number) {
  this.precio = p;
}

}
