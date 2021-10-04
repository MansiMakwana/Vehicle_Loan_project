import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { AproovedLoansComponent } from './aprooved-loans/aprooved-loans.component';
import { EMICalcComponent } from './emicalc/emicalc.component';
import { FormPg1Component } from './form-pg1/form-pg1.component';
import { FormPg2Component } from './form-pg2/form-pg2.component';
import { FormPg3Component } from './form-pg3/form-pg3.component';
import { HomeComponent } from './home/home.component';
import { HomeafterloginComponent } from './homeafterlogin/homeafterlogin.component';
import { LoanOfferComponent } from './loan-offer/loan-offer.component';
import { PendingLoansComponent } from './pending-loans/pending-loans.component';
import { RejectedLoansComponent } from './rejected-loans/rejected-loans.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UseraccdetailsComponent } from './useraccdetails/useraccdetails.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

const routes: Routes = 
[
  //{path:'',component:AdminLoginComponent},
 // {path:'' , component:UserloginComponent},
 //{path:'',component:AdminLoginComponent},
{path:'',component:HomeComponent},
//{path:'',component:LoanOfferComponent},
{path:'homeafterlogin',component:HomeafterloginComponent},
{path:'user-register',component:UserRegisterComponent},
{path:'userlogin',component:UserloginComponent},
{path:'homeafterlogin',component:HomeafterloginComponent},
{path:'admin-login',component:AdminLoginComponent},
{path:'admin-dashboard',component:AdminDashboardComponent},
{path:'home',component:HomeComponent},
{path:'user-dashboard',component:UserDashboardComponent},
{path:'emicalc',component:EMICalcComponent},
{path:'form-pg1',component:FormPg1Component},
{path:'form-pg2',component:FormPg2Component},
{path:'form-pg3',component:FormPg3Component},
{path:'apply-loan',component:ApplyLoanComponent},
{path:'loan-offer',component:LoanOfferComponent},
{path:'aprooved-loans',component:AproovedLoansComponent},
{path:'pending-loans',component:PendingLoansComponent},
{path:'rejected-loans',component:RejectedLoansComponent},
{path:'view-details',component:ViewDetailsComponent},
{path:'vehicle',component:VehicleComponent},
{path:'useraccdetails',component:UseraccdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
