import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Invoice} from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor() { }

  // getInvoicesByTenantId(tenantId: number): Observable<Invoice[]> {
  //   return this.http.get<Invoice[]>(`${this.apiUrl}?tenantId=${tenantId}`);
  // }
}
