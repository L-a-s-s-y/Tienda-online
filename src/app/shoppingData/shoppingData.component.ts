import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarritoService } from '../carrito.service';
import { PricesService } from '../prices.service';
import { User_dataService } from '../user_data.service';

@Component({
  selector: 'app-shoppingData',
  templateUrl: './shoppingData.component.html',
  styleUrls: ['./shoppingData.component.css']
})
export class ShoppingDataComponent implements OnInit {

  subtotal:number = 0;
  iva:number = 0;
  total:number = 0;
  aumento_envio:number = 0;

  constructor(public userData:User_dataService, private carrito:CarritoService, private router:Router, private precios:PricesService) {
    this.subtotal = precios.subtotal;
    this.iva = precios.iva;
    this.total = precios.total;

  }

  ngOnInit() {
    
  }

  envioGratis() {
    this.aumento_envio = 0;
  }
  
  envio24h() {
    this.aumento_envio = 3;
  }

  continuarTramite() {
    let datos_vacios = true;

    if(this.userData.usuario.nombre !== '') {
      if(this.userData.usuario.apellido !== '') {
        if(this.userData.usuario.direccion !== '') {
          if(this.userData.usuario.pais !== '') {
            if(this.userData.usuario.ciudad !== '') {
              if(this.userData.usuario.cp !== '') {
                if(this.userData.usuario.telefono !== '') {
                  this.precios.total += this.aumento_envio;
                  datos_vacios = false;
                  this.router.navigate(['/buying3']);
                }
              }
            }
          }
        }
      }
    }

    if(datos_vacios) {
      alert('A excepción del campo "Dirección 2", todos deben estar rellenos. Revise la información y asegúrese de que es correcta.');
    }
    
  }

  cancelarTramite() {
    this.router.navigate(['']);
  }
  
  pasoAtras() {
    this.router.navigate(['/buying1']);
  }

}
