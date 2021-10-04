import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Loan } from './loan';
@Injectable({
  providedIn: 'root'
})
export class ApplyLoanService {
  uID:number=JSON.parse(sessionStorage.getItem('token')  || '{}');
  constructor(private http:HttpClient) { }

  baseUrl="http://localhost:8089/";

  public ApplyForLoanRemote(loan:Loan)
  {
   return this.http.post(this.baseUrl+"applyLoan/"+this.uID,loan);
  }


  public updateLoanDetailsRemote(loan:Loan)
  {
    return this.http.put(this.baseUrl+"updateLoanDetails",loan);
  }
}
