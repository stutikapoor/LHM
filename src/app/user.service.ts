import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url="http://localhost:3000/user"
  url1="http://localhost:3000/user2"
  url2="http://localhost:3000/user1"
  constructor(private http:HttpClient) { }
  addData(name,email,message,subject){
    const obj={name,email,message,subject}
    this
      .http
        .post(`${this.url}/add`,obj).subscribe(res=>console.log(res))
  }

  
  addData1(name,email,number){
    const obj2={name,email,number}
    console.log(obj2)
    // this
    //   .http
    //     .post(`${this.url1}/add`,obj1).subscribe(res=>console.log(res))
    this.http.post(`${this.url}/cdadd`,obj2).subscribe(res=>console.log(res)) 
  }

  addData2(name,email,number,amount){
    const obj1={name,email,number,amount}
    console.log(obj1)
    // this
    //   .http
    //     .post(`${this.url1}/add`,obj1).subscribe(res=>console.log(res))
    this.http.post(`${this.url}/cadd`,obj1).subscribe(res=>console.log(res))
  }
}
