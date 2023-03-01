import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product/product.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']

})

export class ProductListComponent implements OnInit{
  products: Product[] = [];

  constructor(private route: ActivatedRoute,
              private productService: ProductService) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['category']){
        this.products = this.productService.getItemByCategory(params['category']);
      }else{
        this.products = this.productService.getAllItem();
      }
    })
  }


  share() {
    window.alert('The product has been shared!');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/