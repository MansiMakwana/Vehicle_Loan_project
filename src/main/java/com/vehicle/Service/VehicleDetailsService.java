package com.vehicle.Service;

import com.vehicle.pojo.VehicleDetails;

public interface VehicleDetailsService {
	public VehicleDetails SaveVehicle(VehicleDetails vehicle, int userId);
}
