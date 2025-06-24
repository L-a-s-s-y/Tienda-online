import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { User_dataService } from '../user_data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nombre:string = '';
  apellido:string = '';
  usuario:string = '';
  contrasena:string = '';
  conf_contrasena:string = '';
  email:string = '';
  direccion:string = '';
  cp:string = '';
  ciudad:string = '';
  pais:string = '';

  terminos:boolean = false;
  privacidad:boolean = false;

  constructor(private router:Router, private user_data:User_dataService) { }

  aceptarTerminos() {
    this.terminos = !this.terminos;
  }

  aceptarPrivacidad() {
    this.privacidad = !this.privacidad;
  }

  ngOnInit() {
  }

  verificarDatos() {

    let registroFallido:boolean = true;

    if(this.nombre !== '') {
      if(this.apellido !== ''){
        if(this.usuario !== '') {
          if(this.contrasena === this.conf_contrasena && this.contrasena != '' && this.conf_contrasena != '') {
            if(this.email !== '') {
              if(this.direccion !== '') {
                if(this.cp !== '') {
                  if(this.ciudad !== '' && this.pais !== '') {
                    if(this.terminos && this.privacidad) {
                      //Introducir datos en la base de datos
                      this.user_data.addUsuario(new User(this.nombre, this.apellido, this.usuario, this.contrasena, this.email, this.direccion, this.cp, this.ciudad, this.pais));
                      registroFallido = false;
                      alert("Registro completado con éxito");
                      this.contrasena = this.conf_contrasena = '';
                      this.router.navigate(['']);
                    } else {
                      alert('Debe aceptar los términos y condiciones y la política de privacidad');
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    if(registroFallido) {
      alert("Debe rellenar todos los campos antes de poder continuar");
    }
}

}
