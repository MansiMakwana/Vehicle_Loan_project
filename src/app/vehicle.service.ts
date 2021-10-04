import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicledetails } from './vehicledetails';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

 

  constructor(private http:HttpClient) { }
  baseUrl="http://localhost:8089/";
  uID:number=JSON.parse(sessionStorage.getItem('token')  || '{}');
  public vehicleDetailsFromRemote(vehicle: Vehicledetails){
  return this.http.post(this.baseUrl+"saveVehicle/"+this.uID,vehicle);

}
}
