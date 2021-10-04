import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminControlsService } from '../admin-controls.service';

@Component({
  selector: 'app-rejected-loans',
  templateUrl: './rejected-loans.component.html',
  styleUrls: ['./rejected-loans.component.css']
})
export class RejectedLoansComponent implements OnInit {

  constructor(private router:Router,private service:AdminControlsService) { }
  RejectedLoanArray:any;
  ngOnInit(): void {

    this.service.getRejectedLoansRemote().subscribe(
      (data)=>{
        console.log(data);
        this.RejectedLoanArray=data;
        console.log(this.RejectedLoanArray);
  },
  (error)=>
  {
      console.log(error);
  }
    )
  }

  



  gotoViewDetails(user_id:any)
  {
    console.log("User Id fetched: "+user_id);
    this.service.setId(user_id);
    this.router.navigate(["/view-details"]);
   
  }


}
