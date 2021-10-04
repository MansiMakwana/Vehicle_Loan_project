import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Userlogin } from './userlogin';
@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(private http:HttpClient) { }

  baseUrl="http://localhost:8089/";
  uID:number=JSON.parse(sessionStorage.getItem('token')  || '{}');

  public loginUserFromRemote(user:Userlogin)
  {
    return this.http.post(this.baseUrl+"userLogin",user);
  }


  public registerUserFromLogin(user:Userlogin)
  {
    return this.http.post(this.baseUrl+"userRegister",user);
  }

  public getUserById()
  {
    return this.http.get(this.baseUrl+"getUserById/"+this.uID);
  }

}
