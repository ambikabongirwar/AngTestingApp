import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent{
  @Input() productObj: any;
  @Output() myEvent = new EventEmitter();
  sendProductTitleToParent(productTitle: string) {
    this.myEvent.emit(productTitle);
  }
}
