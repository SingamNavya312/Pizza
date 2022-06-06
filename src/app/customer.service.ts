import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
 

  constructor(private http: HttpClient) {}
  API ='http://localhost:8080';
    public registerCustomer(customerData: any){

      return this.http.post(this.API + '/orderDetails',customerData);

    }

    public getCustomers(){
      return this.http.get(this.API + '/getCustomers');
    }

    public deleteCustomer(id:number){
      return this.http.delete(this.API + '/deleteCustomer?id=' +id);
    }

     public updateCustomer(customer: any)
     {
       return this.http.put(this.API + '/updateCustomer', customer);
     }


}
