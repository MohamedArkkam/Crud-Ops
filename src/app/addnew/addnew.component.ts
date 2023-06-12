import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {
  messageclass='';
  message='';
  constructor(private service:CustomerService){
    this.save_Customer();
  }

  ngOnInit(): void { }

  register = new FormGroup({
    id:new FormControl({value:"",disabled:true}),
    name:new FormControl("",Validators.required),
    email:new FormControl("",Validators.compose([Validators.required,Validators.email])),
    phone:new FormControl("",Validators.required)
  });

  save_Customer(){
    if(this.register.valid)
    {
      this.service.saveCustomer(this.register.value).subscribe(result=>{
        if(result!=null)
        {
          this.message="customer saved successfully"
          this.messageclass="success"
          this.clear_Customer();
        }
      });
    }
    else
    {
      this.message="Enter valid data"
      this.messageclass="error"
    }
  }

  clear_Customer(){
    this. register = new FormGroup({
      id:new FormControl(''),
      name:new FormControl(""),
      email:new FormControl(""),
      phone:new FormControl("")
    });
  }

}
