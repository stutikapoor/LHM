

import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'
@Component({
  selector: 'app-cdonation',
  templateUrl: './cdonation.component.html',
  styleUrls: ['./cdonation.component.css']
})
export class CDonationComponent implements OnInit {
  name;
  email;
  number;
  amount;
  constructor(private um:UserService) { }

  ngOnInit() {
  }

  addData2(){
    this.um.addData2(this.name,this.email,this.number,this.amount)
  }

}




