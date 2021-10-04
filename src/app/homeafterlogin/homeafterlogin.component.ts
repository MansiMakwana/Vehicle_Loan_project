import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homeafterlogin',
  templateUrl: './homeafterlogin.component.html',
  styleUrls: ['./homeafterlogin.component.css']
})
export class HomeafterloginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  gotoEMICalc()
  {
    this.router.navigate(["/emicalc"]);
  }

  gotoUserDashboard()
  {
    this.router.navigate(["/user-dashboard"]);
  }

  gotoHome()
  {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('isLogin');
    this.router.navigate(["/home"])
  }


  // gotoUserAccDetails()
  // {

  //   this.router.navigate(["/useraccdetails"]);
  // }

  gotoVehicle()
  {
    this.router.navigate(["/vehicle"])
  }

}
