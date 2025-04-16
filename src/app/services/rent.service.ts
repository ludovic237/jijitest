import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentService {

  private apiUrl = '/api/rents';

  constructor(private http: HttpClient) {}

  getAll(): Observable<RentPayment[]> {
    return this.http.get<RentPayment[]>(this.apiUrl);
  }

  create(rent: RentPayment): Observable<RentPayment> {
    return this.http.post<RentPayment>(this.apiUrl, rent);
  }

  update(rent: RentPayment): Observable<RentPayment> {
    return this.http.put<RentPayment>(`${this.apiUrl}/${rent.id}`, rent);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
