import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplyLoanService } from '../apply-loan.service';
import { Loan } from '../loan';

@Component({
  selector: 'app-loan-offer',
  templateUrl: './loan-offer.component.html',
  styleUrls: ['./loan-offer.component.css']
})
export class LoanOfferComponent implements OnInit {

  constructor(private service:ApplyLoanService, private router:Router) { }

  ngOnInit(): void {
  }
  
  flag:boolean=false;
  dis:boolean=false;
  tempID:number=0;
  loan:any;

  applyForLoan(loanDetailsForm:any)
  {
    this.loan=loanDetailsForm.value;

    this.service.ApplyForLoanRemote(this.loan).subscribe(


      (data)=>{
        console.log(data);
          this.loan=data;
          this.dis=true;
          this.flag=true;
          this.tempID=this.loan.loanId;
      },
      (error)=>
      {
        console.log(error);
      }
    )


  }


  updateLoanDetails(loanDetailsForm:any)
  {
    this.dis=false;
    this.loan=loanDetailsForm.value;
    this.loan.loanId=this.tempID;
 
    this.service.updateLoanDetailsRemote(this.loan).subscribe(

      (data)=>{
        console.log(data);
          this.loan=data;
          this.dis=true;
          this.flag=true;
          this.tempID=this.loan.loanId;
      },
      (error)=>
      {
        console.log(error);
      }

    )



  }


  gotoFormPage1()
  {
    this.router.navigate(["/form-pg1"])
  }

}
