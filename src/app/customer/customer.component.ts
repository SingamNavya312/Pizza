import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerDetails = null as any;

  
  ngOnInit(): void {
  }

  constructor(private customerService: CustomerService){
    this.getCustomersDetails();
  }
  register(registerForm: NgForm) {
    this.customerService.registerCustomer(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);  
        registerForm.reset();
        this.getCustomersDetails();

      },
      (err) => {
        console.log(err);
      }
    );


  }

  getCustomersDetails(){
    this.customerService.getCustomers().subscribe(
      (resp) => {
        console.log(resp);
        this.customerDetails = resp;

      },
      (err) =>{
        console.log(err);
      }
    );
  }



  deleteCustomer(customer: { orderId: number; }){
    this.customerService.deleteCustomer(customer.orderId).subscribe(
      (resp) =>
      {
        console.log(resp);
        this.getCustomersDetails();
      },
      (err) => {
        console.log(err);
      }

    );
  }


  
}
