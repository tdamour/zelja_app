import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerCreateFormComponent } from './customer-create-form/customer-create-form.component';
import { provideRouter,RouterModule } from '@angular/router';
// import { routes } from './app.routes';
import { CustomersGridComponent } from './customers-grid/customers-grid.component';
import { CustomerUpdateFormComponent } from './customer-update-form/customer-update-form.component';
import { CustomerReadFormComponent } from './customer-read-form/customer-read-form.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerCreateFormComponent,
    CustomersGridComponent,
    CustomerUpdateFormComponent,
    CustomerReadFormComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
