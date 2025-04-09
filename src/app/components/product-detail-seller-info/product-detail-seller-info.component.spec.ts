import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailSellerInfoComponent } from './product-detail-seller-info.component';

describe('ProductDetailSellerInfoComponent', () => {
  let component: ProductDetailSellerInfoComponent;
  let fixture: ComponentFixture<ProductDetailSellerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailSellerInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailSellerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
