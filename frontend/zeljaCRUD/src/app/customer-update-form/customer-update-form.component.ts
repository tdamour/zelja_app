import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';
import { Router,ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Customer } from '../../model/Customer';


@Component({
  selector: 'app-customer-update-form',
  templateUrl: './customer-update-form.component.html',
  styleUrl: './customer-update-form.component.scss'
})

export class CustomerUpdateFormComponent implements OnInit {
  id:number=0;  
  first_name:String ='';
  last_name:String = ''; 

  customer:Customer = Object();


  constructor(
    private customerService: CustomersService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
 
    this.activeRoute.params.subscribe(params => {
      this.id = params['id'];
   });

   this.customerService.getCustomer(this.id.toString()).subscribe((result) => {
      this.customer = result.data[0];
   });
  }

  updateCustomer(updateForm:NgForm){
    console.log("VALUE IN UPDATE Form FUNC ===V");
    console.log(updateForm.value); 
    console.log("FIRST NAME IN VALUE ==V");
    console.log(updateForm.value.first_name); 
    
    let body = {
      id: updateForm.value.id, 
      first_name: updateForm.value.first_name, 
      last_name: updateForm.value.last_name
    }

    this.customer = body; 

    console.log("BODY IN UPDATE CUSTOMER FUNC ==V")
    console.log(body); 
    console.log(body.id);
    this.customerService.updateData(this.customer,this.customer.id).subscribe((response) => {
    	console.log(response)
      this.router.navigate(['/Grid']);
    },
    (error) => {
      console.error('Error handler:', error);
    }
    )
  }

  backToHome(){
    this.router.navigate(['/Grid']);
  }

}
