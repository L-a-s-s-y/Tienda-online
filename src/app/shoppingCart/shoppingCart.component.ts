import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from '../carrito.service';
import { PricesService } from '../prices.service';
import { UserProduct } from '../user_product';

@Component({
  selector: 'app-shoppingCart',
  templateUrl: './shoppingCart.component.html',
  styleUrls: ['./shoppingCart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  compra:UserProduct[] = [];
  subtotal:number = 0.0;
  iva:number = 0.0;
  total:number = 0.0;

  constructor(private router:Router, private httpclient:HttpClient, private carrito:CarritoService, private precios:PricesService) {
    this.compra = carrito.carrito;
    let precio_total = 0;
    for(let i = 0; i < this.compra.length; i++) {
      precio_total += this.compra[i].product.precio * this.compra[i].num_unidades;
    }
    this.subtotal = precio_total;
    this.iva = this.subtotal * 0.21;
    this.iva = Number.parseInt(this.iva.toFixed(2));
    this.total = this.subtotal + this.iva;

  }

  ngOnInit() {
  }

  eliminarProducto(indice:number) {
    let precio_quitar:number = this.compra[indice].product.precio * this.compra[indice].num_unidades;
    this.subtotal -= precio_quitar;
    this.iva -= precio_quitar * 0.21;
    this.total = this.subtotal + this.iva;
    this.compra.splice(indice, 1);
  }

  continuarTramite() {
    this.precios.subtotal = this.subtotal;
    this.precios.iva = this.iva;
    this.precios.total = this.total;
    this.router.navigate(['/buying2']);
  }

  cancelarTramite() {
    this.router.navigate(['']);
  }

}
