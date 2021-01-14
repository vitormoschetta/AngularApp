import { Injectable } from '@angular/core';
import { ProductRepositoryService } from 'src/app/mock/product-repository.service';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private repository: ProductRepositoryService) { }

  getAll(): Product[] {
    return this.repository.getAll()
  }
 
}
