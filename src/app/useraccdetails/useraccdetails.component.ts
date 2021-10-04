import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UseraccdetailsService } from '../useraccdetails.service';

@Component({
  selector: 'app-useraccdetails',
  templateUrl: './useraccdetails.component.html',
  styleUrls: ['./useraccdetails.component.css']
})
export class UseraccdetailsComponent implements OnInit {

  constructor(private service:UseraccdetailsService, private router:Router) { }

  accdetails:any;
  isELigible:boolean=true;
  useraccdetails(UserAccountDetailsForm:any)
  {
    this.service.getAll(UserAccountDetailsForm.value).subscribe(
      (data)=>{
        console.log(data);
        this.accdetails=data;
        if(this.accdetails.existingEMI==false && this.accdetails.monthlySalary>=25000){
          this.router.navigate(["/loan-offer"]);
        } else {
          this.isELigible = false;
        }
      }
    )
  }

  
  ngOnInit(): void {
  }

}
