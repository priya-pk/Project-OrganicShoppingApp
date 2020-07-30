import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ProductModel } from './products/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // headers = new HttpHeaders().set('COntent-Type','application/json')

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<any>('http://localhost:3000/api/products')
  }
  newProduct(item){ //stores productItem foem add-product.ts
    return this.http.post<any>('http://localhost:3000/api/insert',{"product":item}) //item named AS "product" is sending to server so we name there as produduct.productId
     .subscribe(data=>{console.log(data)})  //return response from server side(success message)
  }
  putProduct(product:ProductModel){
    return this.http.put(`http://localhost:3000/${product.productId}`,product).
    subscribe(data=>{
      console.log(data)
    })
  }
  editProduct(id){
    return this.http.get<any>(`http://localhost:3000/api/read/${id}`)
  }
  updateProduct(id,data){
    return this.http.put<any>(`http://localhost:3000/api/update/${id}`,data).
    subscribe(data=>{
       console.log('data id',data)
    })
  }

  deleteProduct(id){
    return this.http.delete(`http://localhost:3000/api/delete/${id}`)
  }

  
  
}