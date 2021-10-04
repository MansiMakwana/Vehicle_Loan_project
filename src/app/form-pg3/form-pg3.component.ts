import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminControlsService } from '../admin-controls.service';
import { UseraccdetailsService } from '../useraccdetails.service';

@Component({
  selector: 'app-form-pg3',
  templateUrl: './form-pg3.component.html',
  styleUrls: ['./form-pg3.component.css']
})
export class FormPg3Component implements OnInit {

  constructor(private router:Router, private service:AdminControlsService) { }

  uID:number=JSON.parse(sessionStorage.getItem('token')  || '{}');
  loan:any;
  ngOnInit(): void {
    this.service.getApplicantByIdRemote(this.uID).subscribe(
      (data)=>
      {
        console.log(data);
        this.loan=data;
      },
      (error)=>
      {
        console.log(error);
      }

    )
  }


  

  gotoHomeAfterLogin()
  {
  this.router.navigate(["/homeafterlogin"]);
}
}