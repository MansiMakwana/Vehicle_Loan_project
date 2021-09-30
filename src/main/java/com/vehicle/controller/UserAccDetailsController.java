package com.vehicle.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.vehicle.Service.UserAccDetailsService;
import com.vehicle.pojo.UserAccDetails;
//import com.vehicle.repository.UserAccDetailsRepo;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserAccDetailsController {
	
	@Autowired
	UserAccDetailsService uService;
	
	
	@PostMapping("/userAccDetails")

	public UserAccDetails saveUser(@RequestBody UserAccDetails user) throws Exception
	{
		return uService.saveUser(user);
	}
	
}
