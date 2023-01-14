import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyByProductComponent } from './pharmacy-by-product.component';

describe('PharmacyByProductComponent', () => {
  let component: PharmacyByProductComponent;
  let fixture: ComponentFixture<PharmacyByProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyByProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacyByProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
