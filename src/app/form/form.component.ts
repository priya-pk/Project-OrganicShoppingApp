import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  alert:boolean = false;

  UserData:{fname:'',lname:'',ph:'',address1:'',address2:'',city:'',state:'',zip:''}

  constructor(private _auth:AuthService,private _router:Router) { }

  ngOnInit(): void {
  }

  details(){
    this._router.navigate(['message'])
  }
  

}
