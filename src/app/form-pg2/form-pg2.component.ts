import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UseraccdetailsService } from '../useraccdetails.service';

@Component({
  selector: 'app-form-pg2',
  templateUrl: './form-pg2.component.html',
  styleUrls: ['./form-pg2.component.css']
})
export class FormPg2Component implements OnInit {

  constructor(private router:Router, private service:UseraccdetailsService) { }

  acc:any;
  ngOnInit(): void {

    this.service.getAccDetailsById().subscribe(

      (data)=>
      {
        console.log(data);
        this.acc=data;

      },
      (error)=> 
      {
        console.log(error);

      }
    )



  }

  gotoFormPg3()
  {
    this.router.navigate(["/form-pg3"]);
    
  }

}
