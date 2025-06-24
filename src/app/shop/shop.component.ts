import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  correo_suscripcion:string = '';
  resultado_suscripcion:boolean = false;
  aparicion_msg_error:boolean = false;

  constructor(private router:Router, private httpclient:HttpClient) { }

  ngOnInit() {
  }

  comprobarCorreo():void {
   if(this.correo_suscripcion === '') {
    this.resultado_suscripcion = false;
    this.aparicion_msg_error = true;
   } else {
     this.resultado_suscripcion = true;
     this.aparicion_msg_error = false;
     this.httpclient.post('https://tbw2122-3-default-rtdb.europe-west1.firebasedatabase.app/suscripciones.json', this.correo_suscripcion).subscribe(
       response => console.log('Se ha registrado el correo ' + response),
       error => console.log('Error: ' + error)
     );
   }
  }
}
