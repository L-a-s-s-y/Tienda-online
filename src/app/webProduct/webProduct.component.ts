import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarritoService } from '../carrito.service';
import { Product } from '../product';
import { Product_dataService } from '../product_data.service';
import { User } from '../user';
import { User_dataService } from '../user_data.service';
import { UserProduct } from '../user_product';

@Component({
  selector: 'app-webProduct',
  templateUrl: './webProduct.component.html',
  styleUrls: ['./webProduct.component.css']
})
export class WebProductComponent implements OnInit {

  productos:Product[] = [];
  indice:number = 0;
  num_unidades:number = 1;
  num_productos:number = 0;

  p1:number = 0;
  p2:number = 0;
  p3:number = 0;
  
  constructor(private router:Router, private route:ActivatedRoute, private product_data:Product_dataService, private user_data:User_dataService, private carrito:CarritoService) { }

  ngOnInit() {
    this.indice = this.route.snapshot.params['id'];
    this.product_data.getProductos().subscribe(products => {
      this.productos = Object.values(products);
      this.num_productos = this.productos.length;
      this.p1 = (this.indice + 1) % this.num_productos;
      this.p2 = (this.indice + 2) % this.num_productos;
      this.p3 = (this.indice + 3) % this.num_productos;
    });

  }
  
  anadirCarrito(n_unidades:string) {
    this.num_unidades = Number.parseInt(n_unidades);
    if(this.num_unidades > 0) {
      this.carrito.addProductoCarrito(new UserProduct(this.user_data.usuario, this.productos[this.indice], this.num_unidades));
      this.router.navigate(['/buying1']);
    } else {
      alert('Seleccione una cantidad de este artículo para añadir al carrito.');
    }
  }

}
