import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HomeafterloginComponent } from './homeafterlogin/homeafterlogin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { HomeComponent } from './home/home.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { EMICalcComponent } from './emicalc/emicalc.component';
import { Ng5SliderModule } from 'ng5-slider';

@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    UserRegisterComponent,
    AdminLoginComponent,
    HomeafterloginComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    HomeComponent,
    ApplyLoanComponent,
    EMICalcComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng5SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }