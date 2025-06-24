import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class User_dataService {

  usuario:User = new User('', '', '', '', '', '', '', '', '');
  registro:boolean = false;

  constructor(private httpClient:HttpClient) { }

  addUsuario(user:User) {
    this.usuario = user;
    this.httpClient.post('https://tbw2122-3-default-rtdb.europe-west1.firebasedatabase.app/usuarios.json',user).subscribe(
      response => console.log('Se ha añadido el usuario ' + response),
      error => console.log('Error: ' + error),
    );
    this.registro = true;
  }

  getUsuarios() {
    return this.httpClient.get('https://tbw2122-3-default-rtdb.europe-west1.firebasedatabase.app/usuarios.json');
  }

}
