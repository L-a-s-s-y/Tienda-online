import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class Product_dataService {

constructor(private httpClient:HttpClient) {
  let productos_web:Product[] = [
    new Product('Funko POP Marvel Sylvie', 14.95, '/assets/imagenes_proyecto/sylvie_3.jpg'),
    new Product('Funko POP Star Wars: The Mandalorian - Boba Fett', 34.99, '/assets/imagenes_proyecto/boba.jpg'),
    new Product('Funko POP Movies The Suicide Squad, Peacemaker', 14.90, '/assets/imagenes_proyecto/peacemaker.jpg'),
    new Product('POP! Moment: Harry Potter - Harry vs Voldemort', 34.99, '/assets/imagenes_proyecto/hp_duel.jpg'),
    new Product('POP Movies: The Batman - Batman', 14.99, '/assets/imagenes_proyecto/batman.jpg'),
    new Product('Funko POP "The Child" from The Mandalorian 10"', 34.90, '/assets/imagenes_proyecto/the_child.jpg'),
  ];

  httpClient.put('https://tbw2122-3-default-rtdb.europe-west1.firebasedatabase.app/productos.json', productos_web).subscribe(
    response => console.log('Se han subido los archivos: ' + response),
    error => console.log('Error: ' + error)
  );
}

getProductos() {
  return this.httpClient.get('https://tbw2122-3-default-rtdb.europe-west1.firebasedatabase.app/productos.json');
}

}
