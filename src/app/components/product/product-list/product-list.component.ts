import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductFakeService } from 'src/app/mock/product-fake.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[]  
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private productService: ProductFakeService, private router: Router) { }

  ngOnInit(): void {
    this.products = this.productService.getAll()    
  }  

  create(): void {
    this.router.navigate(['/product/create'])
  }  

}
