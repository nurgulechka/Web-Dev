import {Component, OnInit} from '@angular/core';
import {Product} from "../products";
import {ActivatedRoute} from "@angular/router";
import { CartService } from '../cart.service';
import {ProductService} from "../services/product/product.service";
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  products:Product[] = [];
  constructor(
      private route: ActivatedRoute,
      private cartService: CartService,
      private productService: ProductService
  ) { }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  
  ngOnInit(){
    this.products = this.productService.getAllItem();
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    // Find the product that correspond with the id provided in route.
    this.product = this.products.find(product => product.id === productIdFromRoute);
  }
  

}
