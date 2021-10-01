package com.vehicle.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vehicle.pojo.UserAccDetails;
import com.vehicle.pojo.UserLogin;
import com.vehicle.pojo.VehicleDetails;

@Repository
public interface VehicleDetailsRepo extends JpaRepository<VehicleDetails,Integer > {
	
	


}
