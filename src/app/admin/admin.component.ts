import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private productService: ProductService) { }
  submitted: boolean;
  showSuccess: boolean;
  formControls = this.productService.form.controls;

  ngOnInit() {
    this.productService.getProducts();
  }

  onSubmit() {
    this.submitted = true;
    if (this.productService.form.valid) {
      if (this.productService.form.get('$key').value == null) {
        this.productService.insertProduct(this.productService.form.value);
        this.showSuccess = true;
        setTimeout(() => this.showSuccess = false, 3000);
        this.submitted = false;
      }
    }

  }

}
