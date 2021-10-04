import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from '../user-login.service';

@Component({
  selector: 'app-form-pg1',
  templateUrl: './form-pg1.component.html',
  styleUrls: ['./form-pg1.component.css']
})
export class FormPg1Component implements OnInit {
user:any;
  constructor(private router:Router, private service:UserLoginService) { }
  
  ngOnInit(): void {
   
    console.log("Inside getuserbyid");
    this.service.getUserById().subscribe(

      
      (data)=> 
      {
        console.log(data);
        this.user=data;
        
      },

      (error)=>
      {
        console.log(error);
        alert("Error Occured!");
      }

    )
  }

  gotopg2()
  { 
    
    this.router.navigate(["/form-pg2"]);

  }

}
