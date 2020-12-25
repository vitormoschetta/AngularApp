import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductFakeService } from 'src/app/mock/product-fake.service';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css', '../product.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[]  
  displayedColumns = ['name', 'price', 'action']

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(data => {
      this.products = data
    })  
  }  

  create(): void {
    this.router.navigate(['/product/create'])
  }  

}
