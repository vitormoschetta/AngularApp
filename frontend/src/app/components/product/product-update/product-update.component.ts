import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductFakeService } from 'src/app/mock/product-fake.service';
import { DataResult } from 'src/app/models/dataResult';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product: Product
  form: FormGroup
  submitted: boolean = false
  saveConfirm: boolean = false
  dataResult: DataResult

  constructor(
    private productService: ProductFakeService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    this.product = this.productService.getById(id)    
    this.createForm();       
  }

  onSubmit() {
    this.saveConfirm = false;
    this.submitted = true;
    if (this.form.invalid)
      return;
    this.update();
  }

  update(): void {
    this.product = this.form.value
    this.dataResult = this.productService.update(this.product)
    this.showMessage()
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
