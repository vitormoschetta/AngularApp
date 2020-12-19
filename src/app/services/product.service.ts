import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { DataResult } from '../models/dataResult';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  baseUrl: string = "https://localhost:5001/api/product";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { } 

  create(product: Product): Observable<DataResult> {    
    return this.http.post<DataResult>(this.baseUrl, product);
  }

  getAll(): Observable<Product[]> {    
    return this.http.get<Product[]>(this.baseUrl);
  }

  getById(id: string): Observable<Product> {    
    return this.http.get<Product>(`${this.baseUrl}/${id}`)    
  }

  update(product: Product): Observable<DataResult> {    
    return this.http.put<DataResult>(`${this.baseUrl}/${product.id}`, product)    
  }

  delete(id: string): Observable<DataResult> {    
    return this.http.delete<DataResult>(`${this.baseUrl}/${id}`)
  }

  ShowMessageSuccess(message: string): void {
    this.snackBar.open(message, 'X', {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top",
    })
  }

  ShowMessageError(message: string): void {
    this.snackBar.open(message, '', {
      duration: 4000,
      horizontalPosition: "center",
      verticalPosition: 'top',
      panelClass: ['error-snackbar']
    })
  }

}
