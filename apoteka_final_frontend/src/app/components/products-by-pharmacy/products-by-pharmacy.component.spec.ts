import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsByPharmacyComponent } from './products-by-pharmacy.component';

describe('ProductsByPharmacyComponent', () => {
  let component: ProductsByPharmacyComponent;
  let fixture: ComponentFixture<ProductsByPharmacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsByPharmacyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsByPharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
