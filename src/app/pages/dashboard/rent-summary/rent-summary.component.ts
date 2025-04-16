import { Component } from '@angular/core';

@Component({
  selector: 'app-rent-summary',
  imports: [],
  templateUrl: './rent-summary.component.html',
  styleUrl: './rent-summary.component.css'
})
export class RentSummaryComponent {
  unpaidRent: number = 45000;
  nextDueDate = new Date(2025, 4, 30);
}
