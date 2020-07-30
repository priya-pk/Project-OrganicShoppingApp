import { Component, OnInit } from '@angular/core';
import { ProductModel } from './product.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router'
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // imagewidth:number = 100;
  // imageheight:number = 100; 

  products:ProductModel[];//store data coming from server side and the variable name products which is of type ProductModel ,is an array

  constructor(private productService: ProductService, private router: Router,public _authService: AuthService) { }


  ngOnInit(): void {
    this.productService.getProducts().subscribe((data)=>{
      this.products = JSON.parse(JSON.stringify(data));
    })
  }

  //delete
  delete(product,index){
    console.log(product)
    if(confirm('Are you sure?')===true){
      //this.products.splice(product,1)
      this.products.splice(index,1);
      this.productService.deleteProduct(product._id)
      .subscribe((data)=>{
        console.log('deleted',data);
      })
     }
   
    }
    
  }
