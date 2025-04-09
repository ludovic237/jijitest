import {Component, Input} from '@angular/core';
import {Product} from '../../../models/data';

@Component({
  selector: 'app-item-element',
  imports: [],
  templateUrl: './item-element.component.html',
  styleUrl: './item-element.component.css'
})
export class ItemElementComponent {
@Input() item:Product= new Product();
}
