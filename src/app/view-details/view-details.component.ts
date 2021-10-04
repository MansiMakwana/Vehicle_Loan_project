import { Component, OnInit } from '@angular/core';
import { AdminControlsService } from '../admin-controls.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  constructor(private service:AdminControlsService) { }
  user_Id:any;
  loan:any;
  ngOnInit(): void {

    this.user_Id= this.service.getId();

    this.service.getApplicantByIdRemote(this.user_Id).subscribe(
      (data)=> 
      {
        this.loan=data;
      },
      (error)=>
      {
        console.log(error);
        alert("Error Occurred!!");
      }

    )
    
  }

}
