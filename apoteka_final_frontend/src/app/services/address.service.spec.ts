import { TestBed } from '@angular/core/testing';

import { AddressService } from './address.service';
import {Address} from "../common/address/address";

describe('AddressService', () => {
  let service: AddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddressService);
  });

  it('should be created', () => {
    expect(Address).toBeTruthy();
  });
});
