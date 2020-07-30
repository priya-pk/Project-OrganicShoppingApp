import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../products/product.model';
import { ProductService } from '../product.service';
import { Router,ActivatedRoute, ParamMap } from '@angular/router'
import { CartService } from '../cart.service';

declare let $:any;

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  id='';
  product=<any>('');
  productItem = new ProductModel(null,null,null,null,null,null,null,null,null);

  constructor(private productService: ProductService, private router: Router,public activeRoute:ActivatedRoute, private cart: CartService ) { }

  ngOnInit(): void {
    console.log()
    this.activeRoute.params.subscribe(params=>{
      this.id = params['id']
      console.log(this.id)
    })
    this.productService.editProduct(this.id).subscribe((result)=>{
     this.productItem = JSON.parse(JSON.stringify(result));
     console.log("add");
    })
  }

  // addToCart() {
  //   this.cart.sendMsg(this.productItem)
  // }
 buy(){
  this.router.navigate(['form'])
 }
  back(){
    this.router.navigate(['products'])
  }
}
