import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Router } from '@angular/router';
import { FireauthService } from '../shared/fireauth.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  message = '';

  constructor(
    private productService: ProductService,
    private router: Router,
    private auth: FireauthService
    ) { }
  productArray = [];

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      list => {
        this.productArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
        console.log(this.productArray);
      });
   }

  onEnroll(product) {
    console.log(product.$key);
    }
}


