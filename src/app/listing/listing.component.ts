import { Component,OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  constructor(private service:CustomerService){
    this.load_Customer();
  }
  customer_data:any;
  ngOnInit(): void { }

  load_Customer(){
    this.service.loadCustomer().subscribe(data=>{
      this.customer_data=data;
    });
  }
}
