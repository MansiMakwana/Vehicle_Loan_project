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
  useraccdetails(UserAccountDetailsForm:any)
  {
    this.service.getAll(UserAccountDetailsForm.value).subscribe(
      (data)=>{
        console.log(data);
        this.accdetails=data;

       
        // if(data.accNo){
        //   this.router.navigate(["/homeafterlogin"])
        // }
      }
    )
  }

  
  ngOnInit(): void {
  }

}
