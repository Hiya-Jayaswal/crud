import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../datatype';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  add(data:any){
    return this.http.post('http://localhost:3004/product',data);
  }
  Display(){
    return this.http.get<product[]>('http://localhost:3004/product');
  }
  deleteprod(id:number){
    return this.http.delete('http://localhost:3004/product/${id}')
  }
  getprod(id:string){
    return this.http.get<product>('http://localhost:3004/product/{id}')
  }
}

