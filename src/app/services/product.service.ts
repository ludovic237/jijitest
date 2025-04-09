import { Injectable } from '@angular/core';
import {Product} from '../models/data';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // apiUrl = 'http://localhost:3000/products';  // URL de base pour json-server
  //
  // constructor(private http: HttpClient) { }
  //
  // // Récupérer tous les produits
  //
  // async getAllProducts(): Promise<Product[]> {
  //   const data = await fetch(this.apiUrl);
  //   return (await data.json()) ?? [];
  // }
  // //
  // getProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]>(this.apiUrl);
  // }
  // //
  // // // Ajouter un produit
  // // addProduct(product: Product): Observable<Product> {
  // //   return this.http.post<Product>(this.apiUrl, product);
  // // }
  // //
  // // // Modifier un produit
  // // updateProduct(id: number, product: Product): Observable<Product> {
  // //   return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
  // // }
  // //
  // // // Supprimer un produit
  // // deleteProduct(id: number): Observable<{}> {
  // //   return this.http.delete<{}>(`${this.apiUrl}/${id}`);
  // // }
  // //
  // // // Récupérer un produit spécifique par ID
  // // getProductById(id: number): Observable<Product> {
  // //   return this.http.get<Product>(`${this.apiUrl}/${id}`);
  // // }
}
