import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = "https://localhost:5001/api/product";

  constructor(
    private snackBar: MatSnackBar, private http: HttpClient) { }

  ShowMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 2000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  add(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  getAll(): Observable<Product[]> {
    const url = `${this.baseUrl}/getall`
    return this.http.get<Product[]>(url);
  }

  getById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product)
  }

  delete(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url)
  }

}
