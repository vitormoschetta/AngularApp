import { Component, OnInit } from '@angular/core';
import { DataResult } from 'src/app/models/dataResult';
import { Product } from 'src/app/models/product';
import { NotifyService } from 'src/app/services/notify.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  lista: Product[]
  dataResult: DataResult
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(
    private service: ProductService,    
    private notify: NotifyService) { }

  ngOnInit(): void {
    this.lista = this.service.getAll()
  }
  
  showMessage() {
    if (this.dataResult.success) {
      this.notify.ShowMessageSuccessTopCenter(this.dataResult.message, 3000)    
      this.ngOnInit()  
    }
    else
      this.notify.ShowMessageErrorTopCenter(this.dataResult.message, 3000)
  }

}
