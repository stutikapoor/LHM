import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name;
  email;
  subject;
  message;
  constructor(private ud:UserService) { }

  ngOnInit() {
  }

  addData(){
    this.ud.addData(this.name,this.email,this.message,this.subject)
  }

}




