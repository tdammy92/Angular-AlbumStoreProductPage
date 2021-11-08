import { ProductService } from 'app/product.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  albumInfo:{} | any;
  constructor(private _productService:ProductService) { }

  ngOnInit() {

    this.getAlbum(1)

  }


  getAlbum(id:number):void{
    this._productService.getAlbum(1).subscribe((response )=>{

      console.log(response)
      this.albumInfo = response

    })
  }

}
