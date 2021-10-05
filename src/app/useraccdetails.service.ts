import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAccDetails } from './user-acc-details';

@Injectable({
  providedIn: 'root'
})
export class UseraccdetailsService {
  uID:number=JSON.parse(sessionStorage.getItem('token')  || '{}');
  constructor(private http : HttpClient) { }

  public getAll(accNo:any)  {
    return this.http.post("http://localhost:8089/userAccDetails/"+this.uID, accNo);
  }

  public getAccDetailsById()
  {
    return this.http.get("http://localhost:8089/getAccDetailsById/"+this.uID);
  }
}
