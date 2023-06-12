import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiurl='http://localhost:3000/customer';
  constructor(private http:HttpClient) { }

  loadCustomer(){
    return this.http.get(this.apiurl);
  }

  saveCustomer(customer_data:any){
    return this.http.post(this.apiurl,customer_data);
  }

  loadCustomerbyID(id:any){
    return this.http.get(this.apiurl+'/'+id);
  }

  deleteCustomer(id:any){
    return this.http.delete(this.apiurl+'/'+id);
  }
}
