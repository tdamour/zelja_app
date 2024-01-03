import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersGridComponent } from './customers-grid/customers-grid.component';
import { CustomerCreateFormComponent } from './customer-create-form/customer-create-form.component';
import { HomeComponent } from './home/home.component';
import { CustomerUpdateFormComponent } from './customer-update-form/customer-update-form.component';
import { CustomerReadFormComponent } from './customer-read-form/customer-read-form.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'Home', component: HomeComponent }, 
  {path:'Grid', component: CustomersGridComponent },
  {path: 'AddCustomer', component: CustomerCreateFormComponent},
  {path: 'UpdateCustomer/:id', component: CustomerUpdateFormComponent},
  {path: 'ViewCustomer/:id', component: CustomerReadFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
