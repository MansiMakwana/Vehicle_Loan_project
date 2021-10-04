import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminControlsService } from '../admin-controls.service';

@Component({
  selector: 'app-aprooved-loans',
  templateUrl: './aprooved-loans.component.html',
  styleUrls: ['./aprooved-loans.component.css']
})
export class AproovedLoansComponent implements OnInit {

  constructor(private router:Router,private service:AdminControlsService) { }
  AproovedLoanArray:any;
  ngOnInit(): void {

    this.service.getApprovedLoansRemote().subscribe(
      (data)=>{
        console.log(data);
        this.AproovedLoanArray=data;
        console.log(this.AproovedLoanArray);
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

