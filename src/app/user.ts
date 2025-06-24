export class User {

  nombre:string = '';
  apellido:string = '';
  usuario:string = '';
  contrasena:string = '';
  email:string = '';
  direccion:string = '';
  direccion2:string = '';
  cp:string = '';
  ciudad:string = '';
  pais:string = '';
  telefono:string = '';

  constructor(n:string, a:string, u:string, cont:string, e:string, d:string, cp_:string, ciu:string, p:string) {
      this.nombre = n;
      this.apellido = a;
      this.usuario = u;
      this.contrasena = cont;
      this.email = e;
      this.direccion = d;
      this.cp = cp_;
      this.ciudad = ciu;
      this.pais = p;
  }
}