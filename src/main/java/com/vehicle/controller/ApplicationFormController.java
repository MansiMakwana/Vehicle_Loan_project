package com.vehicle.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.vehicle.Service.ApplicationFormService;
import com.vehicle.pojo.Loan;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ApplicationFormController {
	
	
	@Autowired
	ApplicationFormService aService;
	
	
	//fetch all Application form
	@GetMapping("/viewAllAppForm")
	public List<Loan> viewAllAppForm() throws Exception
	{ 
		return aService.ViewAllAppForm();
	}
	
	
	//fetch Application using userID
	@GetMapping("/fetchApplicationById/{userId}")
	public Loan fetchAppById(@PathVariable("userId") int userId) 
	{
		return aService.fetchAppById(userId);
	}
	
	
	//reject Loan
	@GetMapping ("/rejectLoan/{userId}")
	public Loan rejectLoan(@PathVariable("userId") int userId)
	{
		return aService.rejectLoan(userId);
	}
	
	
	//approve loan
	@GetMapping ("/approveLoan/{userId}")
	public Loan approveLoan(@PathVariable("userId") int userId)
	{
		return aService.approveLoan(userId);
	}
	
	
	//get all users whose loan is approved
	
	@GetMapping("/getAllApprovedLoan")
	public List<Loan> getAllApprovedLoan()
	{
		return aService.getAllApprovedLoan();
	}
	
	
	
	
	//get all users whose loan is pending	
	
	@GetMapping("/getAllPendingLoan")
	public List<Loan> getAllPendingLoan()
	{
		return aService.getAllPendingLoan();
	}
	
	
	//get all users whose loan is rejected
	@GetMapping("/getAllRejectedLoan")
	public List<Loan> getAllRejectedLoan()
	{
		return aService.getAllRejectedLoan();
	}

}
