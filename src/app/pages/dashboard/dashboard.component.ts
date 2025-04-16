import { Component } from '@angular/core';
import {RentSummaryComponent} from './rent-summary/rent-summary.component';
import {InvoiceSummaryComponent} from './invoice-summary/invoice-summary.component';
import {IncidentSummaryComponent} from './incident-summary/incident-summary.component';
import {ServiceSummaryComponent} from './service-summary/service-summary.component';

@Component({
  selector: 'app-dashboard',
  imports:[
    RentSummaryComponent,
    InvoiceSummaryComponent,
    IncidentSummaryComponent,
    ServiceSummaryComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor() { }
}
