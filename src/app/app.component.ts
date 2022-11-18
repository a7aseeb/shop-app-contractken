import { Component } from '@angular/core';
import productsJSON from "../assets/product.json"

interface PRODUCT {
  title: string,
  description: string,
  image: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop-app';

  products: PRODUCT[] = productsJSON
  


}

