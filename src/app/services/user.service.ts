import { Injectable } from '@angular/core';
import {User} from '../models/data';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/users';  // URL de base pour json-server

  constructor(private http: HttpClient) { }

  // Récupérer tous les produits
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // Ajouter un produit
  addUser(product: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, product);
  }

  // Modifier un produit
  updateUser(id: number, product: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, product);
  }

  // Supprimer un produit
  deleteUser(id: number): Observable<{}> {
    return this.http.delete<{}>(`${this.apiUrl}/${id}`);
  }

  // Récupérer un produit spécifique par ID
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }
}
