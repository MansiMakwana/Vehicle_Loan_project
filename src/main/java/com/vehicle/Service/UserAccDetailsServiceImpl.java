package com.vehicle.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vehicle.pojo.UserAccDetails;
import com.vehicle.pojo.UserLogin;
import com.vehicle.repository.UserAccDetailsRepo;
import com.vehicle.repository.UserLoginRepo;

@Service
public class UserAccDetailsServiceImpl implements UserAccDetailsService {
	@Autowired
	UserAccDetailsRepo uRepo ;
	
	@Autowired
	UserLoginRepo uLRepo;
	

	@Override
	public UserAccDetails saveUser(UserAccDetails user, int userId) throws Exception {
		// TODO Auto-generated method stub
		String tempAccNo= user.getAccNo();
		UserAccDetails u=null;
		UserLogin tempUser=uLRepo.findByUserId(userId);
		user.setUserLogin(tempUser);
		if(tempAccNo!=null)
		{
			u=uRepo.findByAccNo(tempAccNo);
			if(u!=null)
				throw new Exception("Invalid User");
		}
		return uRepo.save(user);
	}


}