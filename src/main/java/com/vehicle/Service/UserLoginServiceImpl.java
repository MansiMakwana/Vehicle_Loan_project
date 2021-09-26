package com.vehicle.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vehicle.pojo.UserLogin;
import com.vehicle.repository.UserLoginRepo;

@Service
public class UserLoginServiceImpl implements UserLoginService{

	@Autowired
	UserLoginRepo uRepo;



	@Override
	public UserLogin saveUser(UserLogin user) throws Exception {

	String tempEmail=user.getEmailId();
		
		if(tempEmail !=null && !"".equals(tempEmail)) 
		{
			UserLogin u=uRepo.findByEmailId(tempEmail);
			if(u!=null)
				throw new Exception("User exists with this email id "+tempEmail);
		}
		
		
		
		return uRepo.save(user);
	}



	@Override
	public UserLogin loginUser(UserLogin user) throws Exception {
		String tempEmail=user.getEmailId();
		String tempPassword=user.getPassword();
		UserLogin u=null;
		if(tempEmail!=null && tempPassword!=null)
		{
			 u=uRepo.findByEmailIdAndPassword(tempEmail,tempPassword);
			if(u==null)
				throw new Exception("Invalid EmailId or password");
				
		}
		
		return u;
	}
}
