import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-customer-create-form',
  templateUrl: './customer-create-form.component.html',
  styleUrl: './customer-create-form.component.scss'
})
export class CustomerCreateFormComponent {
   first_name:String ='';
   last_name:String = ''; 

  constructor(
    private customerService: CustomersService,
    private router: Router
  ) { }



  createCustomer(createForm:NgForm){
    
    let body = {
      first_name: createForm.value.first_name, 
      last_name: createForm.value.last_name
    }

    this.customerService.postData(body).subscribe(response => {
      createForm.reset(); 
      this.router.navigate(['/Grid']);
    })

  }

  backToHome(){
    this.router.navigate(['/Grid']);
  }
}
