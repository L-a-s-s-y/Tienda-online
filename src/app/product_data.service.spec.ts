/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Product_dataService } from './product_data.service';

describe('Service: Product_data', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Product_dataService]
    });
  });

  it('should ...', inject([Product_dataService], (service: Product_dataService) => {
    expect(service).toBeTruthy();
  }));
});
