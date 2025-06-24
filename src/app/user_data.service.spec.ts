/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { User_dataService } from './user_data.service';

describe('Service: User_data', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [User_dataService]
    });
  });

  it('should ...', inject([User_dataService], (service: User_dataService) => {
    expect(service).toBeTruthy();
  }));
});
