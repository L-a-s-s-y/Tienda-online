import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PricesService {

  subtotal:number = 0;
  iva:number = 0;
  total:number = 0;

constructor() { }

}
