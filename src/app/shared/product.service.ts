import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firebase: AngularFireDatabase) {
  }

  productList: AngularFireList<any>;
  item : AngularFirestoreCollection<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    prodName: new FormControl('', Validators.required),
    prodDesc: new FormControl('', Validators.required),
    prodCost: new FormControl('', Validators.required),
    prodUrl: new FormControl('', Validators.required),
    prodDisc: new FormControl('', Validators.required)
  });


  getProducts() {
    this.productList = this.firebase.list('products');
    return this.productList.snapshotChanges();
  }

  insertProduct(product) {
    this.productList.push({
      prodName: product.prodName,
      prodDesc: product.prodDesc,
      prodCost: product.prodCost,
      prodUrl: product.prodUrl,
      prodDisc: product.prodDisc
  });
  }
}
