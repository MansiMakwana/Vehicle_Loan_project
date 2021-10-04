import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from '../vehicle.service';
import { Vehicledetails } from '../vehicledetails';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  constructor(private service:VehicleService,private router:Router) { }

  flag:boolean=false;

  ngOnInit(): void {
  }
  vehicle=new Vehicledetails();

  vehicleDetails(vehicleDetailsForm:any){
    this.service=vehicleDetailsForm.value
    
    this.service.vehicleDetailsFromRemote(this.vehicle).subscribe(
      (data)=>{
        console.log(data);
        this.flag=true;
        
        this.router.navigate(["/useraccdetails"]);
        
      },
      (error)=>{
          console.log(error);

      }

    )
     
      
  }


  gotoCheckEligibility()
  {

  }

}
