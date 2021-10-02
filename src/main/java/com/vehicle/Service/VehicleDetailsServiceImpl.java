package com.vehicle.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vehicle.pojo.UserAccDetails;
import com.vehicle.pojo.UserLogin;
import com.vehicle.pojo.VehicleDetails;
import com.vehicle.repository.UserLoginRepo;
import com.vehicle.repository.VehicleDetailsRepo;

@Service
public class VehicleDetailsServiceImpl implements VehicleDetailsService {
 @Autowired
 VehicleDetailsRepo vRepo;
 
 @Autowired
 UserLoginRepo uRepo;

@Override
public VehicleDetails SaveVehicle(VehicleDetails vehicle, int userId) {
	// TODO Auto-generated method stub
	UserLogin tempUser =uRepo.findByUserId(userId);
	vehicle.setUserLogin(tempUser);
	
	
	return vRepo.save(vehicle);
}
}