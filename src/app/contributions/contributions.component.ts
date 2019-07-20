
import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'
@Component({
  selector: 'app-contributions',
  templateUrl: './contributions.component.html',
  styleUrls: ['./contributions.component.css']
})
export class ContributionsComponent implements OnInit {
  name;
  email;
  number;
  constructor(private ud1:UserService) { }

  ngOnInit() {
  }

  addData(){
    this.ud1.addData1(this.name,this.email,this.number)
  }

}




