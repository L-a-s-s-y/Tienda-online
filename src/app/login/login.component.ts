import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { User_dataService } from '../user_data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombre_introducido:string='';
  contrasena_introducida:string='';

  constructor(private router:Router, private servicio_usuario:User_dataService) { }

  ngOnInit() {
  }

  comprobarDatos() {
    //Comprobación del usuario con la BD
    console.log('Usuario ' + this.nombre_introducido);
    console.log('Contraseña ' + this.contrasena_introducida);
    let users:User[] = [];
    this.servicio_usuario.getUsuarios().subscribe(usuarios => {
      console.log(usuarios);
      users = Object.values(usuarios);
    });
    //Obtención de los datos del usuario de la BD
    let encontrado:boolean = false;
    for(let i = 0; i < users.length && !encontrado; i++) {
      if(this.nombre_introducido === users[i].usuario && this.contrasena_introducida === users[i].contrasena) {
        encontrado = true;
        this.servicio_usuario.usuario = users[i];
      }
    }

    if(encontrado) {
      //Inserción del usuario en servicio_usuario
      alert("Inicio de sesión correcto");
      this.router.navigate(['']);
    } else {
      this.nombre_introducido = '';
      this.contrasena_introducida = '';
      alert("Usuario o contraseña incorrectos. Vuelva a intentarlo");
    }
  }

}
