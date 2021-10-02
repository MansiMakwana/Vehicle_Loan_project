package com.vehicle.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.vehicle.Service.VehicleDetailsService;
import com.vehicle.pojo.UserAccDetails;
import com.vehicle.pojo.UserLogin;
import com.vehicle.pojo.VehicleDetails;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class VehicleDetailsController {
	@Autowired
	VehicleDetailsService vService;
	
	@PostMapping("/saveVehicle/{userId}")
	public VehicleDetails SaveVehicle(@RequestBody VehicleDetails vehicle , @PathVariable("userId") int userId) {
		return vService.SaveVehicle(vehicle,userId);
	}

}