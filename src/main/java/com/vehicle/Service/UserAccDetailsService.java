package com.vehicle.Service;

import com.vehicle.pojo.UserAccDetails;

public interface UserAccDetailsService {
	UserAccDetails saveUser(UserAccDetails user, int userId) throws Exception;
}
