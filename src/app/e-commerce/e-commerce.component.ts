import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ECommerceService } from './e-commerce.service';
import { Product } from './Product.model';
interface PriceFilter{
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.scss']
})

export class ECommerceComponent implements OnInit {

  constructor(private ecommerceService:ECommerceService) {
    this.form = new FormGroup({
      SelectedFilter: new FormControl('ALL'),
    
    });
  }
form:FormGroup;
priceFilter:PriceFilter[]=[
  {value: 'ALL', viewValue: 'All Prices'},
  {value: 'ONE_THOUSAND', viewValue: 'Under 1000'},
  {value: 'FIVE_THOUSAND', viewValue: '1000-5000'},
  {value: 'TEN_THOUSAND', viewValue: '5000-10000'},
  {value: 'TWENTY_THOUSAND', viewValue: '10000-20000'},
  {value: 'OVER', viewValue: 'Above 20000'},
]
Products:Product[]=[];
GridLayout:boolean=true
  ngOnInit(): void {
    this.ecommerceService.getProducts().subscribe((data:Product[])=>{
this.Products=data;

    },
    err=>console.log(err))
  }
  

}
