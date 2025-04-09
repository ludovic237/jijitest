import { Injectable } from '@angular/core';
import {Category} from '../models/data';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = 'http://localhost:3000/categories';  // URL de base pour json-server

  constructor(private http: HttpClient) { }

  // Récupérer tous les produits
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }

  // Ajouter un produit
  addCategory(product: Category): Observable<Category> {
    return this.http.post<Category>(this.apiUrl, product);
  }

  // Modifier un produit
  updateCategory(id: number, product: Category): Observable<Category> {
    return this.http.put<Category>(`${this.apiUrl}/${id}`, product);
  }

  // Supprimer un produit
  deleteCategory(id: number): Observable<{}> {
    return this.http.delete<{}>(`${this.apiUrl}/${id}`);
  }

  // Récupérer un produit spécifique par ID
  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/${id}`);
  }
}
