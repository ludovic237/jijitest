import {Component, Input} from '@angular/core';
import {Category} from '../../../models/data';

@Component({
  selector: 'app-item-category-element',
  imports: [],
  templateUrl: './item-category-element.component.html',
  styleUrl: './item-category-element.component.css'
})
export class ItemCategoryElementComponent {
  @Input() item:Category= new Category(0,"0",[]);
}
