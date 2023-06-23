import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  addMessage: string|undefined;
  constructor(private product: ProductService){}
  ngOnInit (): void{}
  add(data:object){
    console.warn(data);
    this.product.add(data).subscribe((result=>{
      console.warn(result);
      if (result){
        this.addMessage = "Product added"
      }
      setTimeout(()=>this.addMessage= undefined,3000);
    }))
  }
}
