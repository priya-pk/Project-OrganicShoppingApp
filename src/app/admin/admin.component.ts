import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminData = {username:'',password:''}

  constructor(private _authService: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

loginAdmin(){
  // console.log(this.adminData)
  this._authService.loginAdmin(this.adminData)
  // .subscribe(
  //   res => {
  //     console.log(res)
  //     localStorage.setItem('token',res.token)
  //     this.router.navigate(['products'])
  //   },
  //   err => console.log(err)
  // )
}
}


