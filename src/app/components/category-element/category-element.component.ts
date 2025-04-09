import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Category, Product} from '../../models/data';

@Component({
  selector: 'app-category-element',
  imports: [],
  templateUrl: './category-element.component.html',
  styleUrl: './category-element.component.css'
})
export class CategoryElementComponent {
  name = 'San Francisco';
  image = '🔥';

  @Input() items:Category[]= [];

}
