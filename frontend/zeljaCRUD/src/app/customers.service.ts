import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private baseURL = `http://localhost:8080`

  constructor(private http: HttpClient) {}

  getAllData(): Observable<any> {
    return this.http.get(`${this.baseURL}/customers/getAll`)
 }

 getCustomer(id:string): Observable<any>{
  return this.http.get(`${this.baseURL}/customers/${id}`)
}


  postData(data: any): Observable<any> {
    return this.http.post(`${this.baseURL}/customers/post`, data)
  }

  updateData(data: any, id: number): Observable<any> {
    console.log("UPDATE DATA FUNCTION ==V");
    console.log(data);
    return this.http.put(`${this.baseURL}/customers/update/${id}`, data)
  }

  deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/customers/delete/${id}`)
  }
   
}