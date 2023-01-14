import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressPharmacyComponent } from './address-pharmacy.component';

describe('AddressPharmacyComponent', () => {
  let component: AddressPharmacyComponent;
  let fixture: ComponentFixture<AddressPharmacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressPharmacyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressPharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
