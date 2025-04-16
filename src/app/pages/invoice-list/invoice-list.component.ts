import { Component } from '@angular/core';
import {InvoiceService} from '../../services/invoice.service';
import {Invoice} from '../../models/data';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent {
  invoices: Invoice[] = [];

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit() {
    this.invoiceService.invoices$.subscribe(data => {
      this.invoices = data;
    });
  }
}
