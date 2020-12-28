import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductFakeService } from 'src/app/mock/product-fake.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css', '../product.component.css']
})

export class ProductListComponent implements  OnInit {
  products: Product[]

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'price', 'action']

  constructor(private productService: ProductFakeService, private router: Router) {
  }

  ngOnInit() {
    this.products = this.productService.getAll()
  }

  create(): void {
    this.router.navigate(['/product/create'])
  }

}