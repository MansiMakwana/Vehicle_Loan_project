import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminControlsService } from '../admin-controls.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private router:Router, private service:AdminControlsService) { }
  loan:any;
  uID:number=JSON.parse(sessionStorage.getItem('token')  || '{}');
  ngOnInit(): void {
    this.service.getApplicantByIdRemote(this.uID).subscribe(
      (data)=> 
      {
        this.loan=data;
      },
      (error)=>
      {
        console.log(error);
        alert("Error Occurred!!");
      }
    )
  }
 
  

  gotoHome()
  {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('isLogin');
    this.router.navigate(["/home"]);
  }

}
