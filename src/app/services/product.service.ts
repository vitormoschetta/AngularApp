import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { DataResult } from '../models/dataResult';
import { Product } from '../models/product';
import { environment } from '../../environments/environment';
import { NotifyService } from './notify.service';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  baseUrl: string = `${environment.baseUrl}/product`

  constructor(
    private snackBar: MatSnackBar, 
    private http: HttpClient, 
    private notify: NotifyService) 
    { } 

  create(product: Product): Observable<DataResult> {    
    return this.http.post<DataResult>(this.baseUrl, product)
  }

  getAll(): Observable<Product[]> {    
    return this.http.get<Product[]>(this.baseUrl)
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

  ShowMessageSuccess(message: string, duration: number): void {
    this.notify.ShowMessageSuccess(message, duration)
  }

  ShowMessageError(message: string, duration: number): void {
    this.notify.ShowMessageError(message, duration)
  }

}
