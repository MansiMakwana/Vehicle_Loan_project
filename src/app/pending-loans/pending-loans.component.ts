import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AdminControlsService } from '../admin-controls.service';

@Component({
  selector: 'app-pending-loans',
  templateUrl: './pending-loans.component.html',
  styleUrls: ['./pending-loans.component.css']
})
export class PendingLoansComponent implements OnInit {

  constructor(private router:Router,private service:AdminControlsService) { }

  PendingLoanArray:any;
  ngOnInit(): void {

    this.service.getPendingLoansRemote().subscribe(
      (data)=>{
        console.log(data);
        this.PendingLoanArray=data;
        console.log(this.PendingLoanArray);
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

  aprooveLoan(user_id:any)
  {
    this.service.aprooveLoanRemote(user_id).subscribe(
      (data)=> 
      {
        console.log(data);
        alert("Status Updated");
      },
      (error)=>
      {
        console.log(error)
        alert("Error Encontered!");
      }
    )

  }


  RejectLoan(user_id:any)
  {

    this.service.aprooveLoanRemote(user_id).subscribe(
      (data)=> 
      {
        console.log(data);
        alert("Status Updated");
      },
      (error)=>
      {
        console.log(error)
        alert("Error Encontered!");
      }
    )
  }
  

 

}
