/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CarritoService } from './carrito.service';

describe('Service: Carrito', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarritoService]
    });
  });

  it('should ...', inject([CarritoService], (service: CarritoService) => {
    expect(service).toBeTruthy();
  }));
});
