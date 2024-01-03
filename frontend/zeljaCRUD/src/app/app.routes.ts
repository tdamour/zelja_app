import { CustomerCreateFormComponent } from './customer-create-form/customer-create-form.component';
import { CustomerReadFormComponent } from './customer-read-form/customer-read-form.component';
import { CustomerUpdateFormComponent } from './customer-update-form/customer-update-form.component';
import {CustomersGridComponent} from'./customers-grid/customers-grid.component';
import {HomeComponent} from './home/home.component'; 

export const routes = [
  {path: '', component:  HomeComponent},
  {path:'Home', component: HomeComponent }, 
  {path:'Grid', component: CustomersGridComponent },
  {path: 'AddCustomer', component: CustomerCreateFormComponent},
  {path: 'UpdateCustomer/:id', component: CustomerUpdateFormComponent},
  {path: 'ViewCustomer/:id', component: CustomerReadFormComponent},
];