import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../datatype';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  productData: undefined|product
  constructor(private route: ActivatedRoute, private product: ProductService){

  }
  ngOnit():void{
    let productid = this.route.snapshot.paramMap.get('id');
    console.warn(productid);
   productid&& this.product.getprod(productid).subscribe((data)=>{
      console.warn(data)
      this.productData=data
    })
  }
  submit(data:any){

  }


}
