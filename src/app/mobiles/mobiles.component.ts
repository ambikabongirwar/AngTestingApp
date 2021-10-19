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

  ngOnInit() {
    this.dsObj.getMobilesData().subscribe(
      data => {
        this.mobiles = data;
      },
      err => {
        console.log("err is ", err);
      }
    )
  }

  /*
  mobileObj: Product = {title: "", text: "", imageUrl: ""};
  addMobileData() {
    this.dsObj.updateMobilesData(this.mobileObj);
    this.mobileObj = {title: "", text: "", imageUrl: ""};
  }*/

}
