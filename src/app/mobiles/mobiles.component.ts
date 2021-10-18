import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {

  mobiles: Product[] = [];
  constructor(private dsObj: DataService) { }

  ngOnInit(): void {
    this.mobiles = this.dsObj.getMobilesData();
  }

  mobileObj: Product = {title: "", text: "", imageUrl: ""};
  addMobileData() {
    console.log(this.mobileObj);
    this.dsObj.updateMobilesData(this.mobileObj);
  }

}
