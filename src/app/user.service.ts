import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url="http://localhost:3000/user"
  constructor(private http:HttpClient) { }
  addData(name,email,message,subject){
    const obj={name,email,message,subject}
    this
      .http
        .post(`${this.url}/add`,obj).subscribe(res=>console.log(res))
  }

  
  addData1(name,email,number){
    const obj={name,email,number}
    this
      .http
        .post(`${this.url}/add`,obj).subscribe(res=>console.log(res))
  }

  addData2(name,email,number,amount){
    const obj={name,email,number,amount}
    this
      .http
        .post(`${this.url}/add`,obj).subscribe(res=>console.log(res))
  }
}
