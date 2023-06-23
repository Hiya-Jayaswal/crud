import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../datatype';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {
  Display:undefined|product[];
  Prodmsg:undefined|string;
  constructor(private product:ProductService){}
  ngOnInit():void{
    this.List();
    }
    deleteprod(id:number){
      console.warn("test id", id)
      this.product.deleteprod(id).subscribe((result)=>{
        if (result){
          this.Prodmsg= "product is deleted"
          this.List()
        }
      })
      setTimeout(()=>{
        this.Prodmsg=undefined},3000);
  }
  List(){
    this.product.Display().subscribe((result)=>{
      console.warn(result);
      if(result){
     this.Display=result;}
     
 })}
}