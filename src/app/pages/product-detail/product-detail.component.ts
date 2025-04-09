import { Component } from '@angular/core';
import {ProductDetailImageComponent} from '../../components/product-detail-image/product-detail-image.component';
import {ProductDetailInfoComponent} from '../../components/product-detail-info/product-detail-info.component';
import {
  ProductDetailSellerInfoComponent
} from '../../components/product-detail-seller-info/product-detail-seller-info.component';
import {Header2Component} from '../../components/header2/header2.component';

@Component({
  selector: 'app-product-detail',
  imports: [ProductDetailImageComponent,ProductDetailInfoComponent,ProductDetailSellerInfoComponent,Header2Component],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

}
