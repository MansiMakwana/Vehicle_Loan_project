import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminControlsService } from '../admin-controls.service';
import { AdminLoginService } from '../admin-login.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router:Router,private service:AdminControlsService) { }

  ngOnInit(): void {
  }

  AproovedLoanArray:any;
  PendingLoanArray:any;
  RejectedLoanArray:any;

  getApprovedLoans()
  {
    this.router.navigate(["/aprooved-loans"]); 

  }


  getPendingLoans()
  {
    this.router.navigate(["/pending-loans"])
  }


  getRejectedLoans()
  {
    this.router.navigate(["/rejected-loans"])
  }

  gotoHome()
  {
    this.router.navigate(["/home"]);
  }
}
