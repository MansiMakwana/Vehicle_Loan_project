import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminControlsService {

 
  constructor(private http:HttpClient) { }
  
  shared_user_id:any|undefined;

  public setId(user_id:any)
  {
    this.shared_user_id=user_id;
  
  }

  public getId()
  {
    return this.shared_user_id;
  }

  baseUrl="http://localhost:8089/";

  public getApprovedLoansRemote()
  {
    return this.http.get(this.baseUrl+"getAllApprovedLoan");
  }

  public getPendingLoansRemote()
  {
    return this.http.get(this.baseUrl+"getAllPendingLoan");
  }

  public getRejectedLoansRemote()
  {
    return this.http.get(this.baseUrl+"getAllRejectedLoan");
  }

  public getApplicantByIdRemote(user_id:any)
  {
    return this.http.get(this.baseUrl+"fetchApplicationById/"+ user_id);
  }


  public aprooveLoanRemote(user_id:any)
  {
    return this.http.get(this.baseUrl+"approveLoan/"+ user_id);
  }

  public RejectLoanRemote(user_id:any)
  {
    return this.http.get(this.baseUrl+"rejectLoan/"+ user_id);
  }
}
