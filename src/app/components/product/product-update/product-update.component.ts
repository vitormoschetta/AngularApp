import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataResult } from 'src/app/models/dataResult';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css', '../product.css']
})
export class ProductUpdateComponent implements OnInit {
  product: Product
  form: FormGroup
  submitted: boolean = false  
  dataResult: DataResult

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit(): void {    
    let id = this.route.snapshot.paramMap.get('id')
    this.getById(id)        
  }

  getById(id: string) {
    this.productService.getById(id).subscribe(data => {
      this.product = data
      this.createForm()
    })    
  }

  onSubmit() {    
    this.submitted = true
    if (this.form.invalid)
      return;
    this.update();
  }

  update(): void {
    this.product = this.form.value
    this.productService.update(this.product).subscribe(data => {
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

  // clear(): void {
  //   this.submitted = false
  // }

  createForm() {
    this.form = this.fb.group({
      id: [
        this.product.id,
        Validators.compose([
          Validators.required          
        ])
      ],
      name: [
        this.product.name,
        Validators.compose([
          Validators.required,
          Validators.minLength(4)
        ])
      ],
      price: [
        this.product.price,
        Validators.compose([
          Validators.required,
        ])
      ]
    });
  }

  get frm() { return this.form.controls; }

}
