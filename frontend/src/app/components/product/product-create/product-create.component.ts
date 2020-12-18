import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataResult } from 'src/app/models/dataResult';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})

export class ProductCreateComponent implements OnInit {
  product: Product
  form: FormGroup
  submitted: boolean = false
  saveConfirm: boolean = false
  dataResult: DataResult

  constructor(
    private productService: ProductService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.product = new Product()
    this.createForm();
  }

  onSubmit() {
    this.saveConfirm = false;
    this.submitted = true;
    if (this.form.invalid)
      return;
    this.create();
  }

  create(): void {
    this.product = this.form.value
    this.productService.create(this.product).subscribe(data => {
      this.dataResult = data
      this.showMessage()
    })      
  }

  showMessage() {
    if (this.dataResult.success) {
      this.productService.ShowMessageSuccess(this.dataResult.message)
      this.clear()
    }
    else
      this.productService.ShowMessageError(this.dataResult.message)
  }

  close(): void {
    this.router.navigate(['/product'])
  }

  clear(): void {
    this.submitted = false;
    this.form.reset();
  }

  createForm() {
    this.form = this.fb.group({
      name: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4)
        ])
      ],
      price: [
        '',
        Validators.compose([
          Validators.required,
        ])
      ]
    });
  }

  get frm() { return this.form.controls; }
}
