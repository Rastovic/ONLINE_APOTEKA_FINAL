import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyGridComponent } from './pharmacy-grid.component';

describe('PharmacyGridComponent', () => {
  let component: PharmacyGridComponent;
  let fixture: ComponentFixture<PharmacyGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacyGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
