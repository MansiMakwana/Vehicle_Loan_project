import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from '../user-login.service';
import { Userlogin } from '../userlogin';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
 

  constructor(private service:UserLoginService, private router:Router)  { }

  ngOnInit(): void {
  }
  //user=new Userlogin();
  user:any;
  uID:number=JSON.parse(sessionStorage.getItem('token')  || '{}');
  isLogin = "false";
  loginuser(userLoginForm:any)
  {
    this.user=userLoginForm.value;

    this.service.loginUserFromRemote(this.user).subscribe(

      (data)=>{
        console.log(data);
        this.user=data;

        
        sessionStorage.setItem('token', JSON.stringify(this.user.userId));
        

        this.isLogin = "true";
        sessionStorage.setItem("isLogin", this.isLogin);
        

        this.router.navigate(["/homeafterlogin"])
        // if(data)
        //   alert("Vehicle Added!");
      },
      (error)=>{
          console.log(error);
          sessionStorage.setItem("isLogin", this.isLogin);
          alert("Invalid EmailId or password!");
      }

    )

    }


    gotoRegisterUser():void
    {
     // alert("hi");
     this.router.navigate(["/user-register"]);

    }


}
