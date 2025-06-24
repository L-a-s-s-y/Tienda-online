import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carrito } from '../carrito';
import { CarritoService } from '../carrito.service';
import { PricesService } from '../prices.service';

@Component({
  selector: 'app-shoppingPayment',
  templateUrl: './shoppingPayment.component.html',
  styleUrls: ['./shoppingPayment.component.css']
})
export class ShoppingPaymentComponent implements OnInit {

  subtotal:number = 0;
  iva:number = 0;
  total:number = 0;
  pago_paypal:boolean = false;

  constructor(private router:Router, private precios:PricesService, private carrito:CarritoService) { }

  ngOnInit() {
    this.subtotal = this.precios.subtotal;
    this.iva = this.precios.iva;
    this.total = this.precios.total;
  }

  seleccionarTarjeta() {
    this.pago_paypal = false;
  }

  seleccionarPaypal() {
    this.pago_paypal = true;
  }

  continuarTramite() {
    this.carrito.setPrecio(this.total);
    this.carrito.confirmarCompra();
    alert('Su compra se ha realizado con éxito');
    this.router.navigate(['']);
  }

  cancelarTramite() {
    this.router.navigate(['']);
  }
  
  pasoAtras() {
    this.router.navigate(['/buying2']);
  }

}
