import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  data;

  constructor(private _productService: ProductService) {

  }
  ngOnInit() {
    this._productService.getProducts().subscribe(

      (res) => {
        this.data = res.products;
        console.log(res.products);
      });
  }

}