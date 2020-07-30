import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../products/product.model';
import { CartModel } from './cart.model';
import { ProductService } from '../product.service';
import { Router,ActivatedRoute } from '@angular/router'
import { AuthService } from '../auth.service';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  private items: CartModel[] =<any>[];
  private total:number = 0;

  // cartItems=[
  //   {productId:1, productName:'test 1',quantity:'kg',price:100,number:3},
  //   {productId:2, productName:'test 2',quantity:'kg',price:140,number:2},
  //   {productId:3, productName:'test 3',quantity:'kg',price:430,number:1},
  //   {productId:4, productName:'test 4',quantity:'kg',price:500,number:5},
  // ];

  // cartTotal = 0  
  constructor(private productService: ProductService, private router: Router,public activeRoute:ActivatedRoute ) { }

  ngOnInit(): void {

    // this.activeRoute.params.subscribe(params =>{
    //   var id = params['id'];
    //   if (id) {
    //     var item : CartModel = {
    //       Cproduct: this.productService.editProduct(id),
    //       qty:1
    //     };

    //   }
    // })














    // this.cart.getMsg().subscribe((product: ProductModel) =>{
    //   this.addProductToCart(product)
    // })
  }

  // addProductToCart(product:ProductModel){

  //   let productExists = false
  //   for(let i in this.cartItems){
  //     if(this.cartItems[i].productId === product.productId){
  //       this.cartItems[i].number++
  //       productExists = true
  //       break;
  //     }
  //   }

  //   if(!productExists){
  //     this.cartItems.push({
  //       productId : product.productId,
  //       productName : product.productName,
  //       price : product.price,
  //       quantity : product.quantity,
  //       number:1,
  //       imageUrl : product.imageUrl
  //     })
  //   }
  //   this.cartTotal =0 
  //   this.cartItems.forEach(item =>{
  //     this.cartTotal += (item.number * item.price)
  //   })
  // }
}
