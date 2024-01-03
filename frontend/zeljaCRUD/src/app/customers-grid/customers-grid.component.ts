import { Component } from '@angular/core';
import { CustomersService } from '../customers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers-grid',
  templateUrl: './customers-grid.component.html',
  styleUrl: './customers-grid.component.scss'
})
export class CustomersGridComponent {
  customerList: any = [];

  constructor(
    private customerService: CustomersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.customerService.getAllData()
      .subscribe(data => {
        if (data != null && data.data != null) {
          var resultData = data.data;
          if (resultData) {
            this.customerList = resultData;
          }
        }
        else{
          this.customerList = []; 
        }
      })
  }

  public editCustomer(customerId:number){
    this.router.navigate(['/UpdateCustomer', customerId ]);
  }

  public viewCustomer(customerId:number){
    this.router.navigate(['/ViewCustomer', customerId ]);
  }

  public deleteCustomer(customerId:number){
    let note = confirm("Are you sure you want to delete this customer?");
    console.log("Confirm value ==V"); 
    console.log(note)
    if (note != null) {
      if(note == true){
        this.customerService.deleteData(customerId.toString()).subscribe((response)=>{
          console.log(response); 
          location.reload(); 
          alert("Delete is successful"); 
        }     
        ); 
      }
    }
  }

}
