package com.vehicle.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vehicle.Service.UserAccDetailsService;
import com.vehicle.pojo.UserAccDetails;
//import com.vehicle.repository.UserAccDetailsRepo;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserAccDetailsController {
	
	@Autowired
	UserAccDetailsService uService;
	
	
	@PostMapping("/userAccDetails/{userId}")

	public UserAccDetails saveUser(@RequestBody UserAccDetails user, @PathVariable("userId") int userId) throws Exception
	{
		return uService.saveUser(user,userId);
	}
	
	
	@GetMapping("/getAccDetailsById/{userId}")
	public UserAccDetails getAccDetailsById(@PathVariable("userId") int userId)
	{
		return uService.getAccDetailsById(userId);
	}
	
}