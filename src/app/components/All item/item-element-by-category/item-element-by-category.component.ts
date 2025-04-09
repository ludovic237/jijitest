import {Component, Input} from '@angular/core';
import {Product} from '../../../models/data';

@Component({
  selector: 'app-item-element-by-category',
  imports: [],
  templateUrl: './item-element-by-category.component.html',
  styleUrl: './item-element-by-category.component.css'
})
export class ItemElementByCategoryComponent {
  @Input() item:Product= new Product();
}
