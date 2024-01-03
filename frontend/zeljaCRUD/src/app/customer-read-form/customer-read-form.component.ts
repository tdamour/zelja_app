import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';
import { Router,ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Customer } from '../../model/Customer';

@Component({
  selector: 'app-customer-read-form',
  templateUrl: './customer-read-form.component.html',
  styleUrl: './customer-read-form.component.scss'
})
export class CustomerReadFormComponent implements OnInit {
  id:number=0;  
  
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

  backToHome(){
    this.router.navigate(['/Grid']);
  }
}
