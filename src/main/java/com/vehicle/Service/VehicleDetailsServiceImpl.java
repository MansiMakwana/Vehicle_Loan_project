package com.vehicle.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vehicle.pojo.UserAccDetails;
import com.vehicle.pojo.UserLogin;
import com.vehicle.pojo.VehicleDetails;
import com.vehicle.repository.VehicleDetailsRepo;

@Service
public class VehicleDetailsServiceImpl implements VehicleDetailsService {
 @Autowired
 VehicleDetailsRepo vRepo;
 @Override
 public VehicleDetails SaveVehicle (VehicleDetails vehicle) {
	 
	return vRepo.save(vehicle);
	
	 
	 
  

}
}