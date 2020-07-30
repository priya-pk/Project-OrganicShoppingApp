import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductModel } from '../products/product.model';
import { Router,ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
  id='';
  product=<any>('');
  productItem = new ProductModel(null,null,null,null,null,null,null,null,null);

  constructor(private productService: ProductService, private router: Router,public activeRoute:ActivatedRoute) { }


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

  UpdateProduct(){
    console.log(this.productItem);
    console.log(this.id)
    this.productService.updateProduct(this.id,this.productItem)
    // .subscribe(result=>{
    //   console.log('Updated Successfully', result);
    
    // })
    this.router.navigate(['products']);
  }
}
