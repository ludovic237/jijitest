import { Component } from '@angular/core';

@Component({
  selector: 'app-invoice-summary',
  imports: [],
  templateUrl: './invoice-summary.component.html',
  styleUrl: './invoice-summary.component.css'
})
export class InvoiceSummaryComponent {
  pendingInvoices = 3;
  totalAmount = 15200;
}
