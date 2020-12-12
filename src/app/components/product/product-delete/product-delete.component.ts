import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductFakeService } from 'src/app/mock/product-fake.service';
import { DataResult } from 'src/app/models/dataResult';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product
  dataResult: DataResult

  constructor(
    private productService: ProductFakeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.product = this.productService.getById(id)    
  }
 
  delete(): void {
    this.dataResult = this.productService.delete(this.product.id)
    this.showMessage()
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
