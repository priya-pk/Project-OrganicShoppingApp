import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
import { ProductModel } from '../products/product.model';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router,public activeRoute:ActivatedRoute) { }

  productItem = new ProductModel(null,null,null,null,null,null,null,null,null)

  ngOnInit(): void {
  }

  AddProduct(){
    this.productService.newProduct(this.productItem);
    console.log("Called");
    alert('Success');
    this.router.navigate(['products']);
  }
} 