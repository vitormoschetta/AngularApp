import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataResult } from 'src/app/models/dataResult';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css', '../product.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product
  dataResult: DataResult

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.getById(id)    
  }

  getById(id: string) {
    this.productService.getById(id).subscribe(data => {
      this.product = data      
    })    
  }

  delete(): void {
    this.productService.delete(this.product.id).subscribe(data => {
      this.dataResult = data
      this.showMessage()
    })        
  }

  showMessage() {
    if (this.dataResult.success) {
      this.productService.ShowMessageSuccess(this.dataResult.message)
      this.close()
    }
    else
      this.productService.ShowMessageError(this.dataResult.message)
  }


  close(): void {
    this.router.navigate(['/product'])
  }

}
