package com.vehicle.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.vehicle.Service.LoanDetailsService;
import com.vehicle.pojo.Loan;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class LoanDetailsController {


	@Autowired
	private LoanDetailsService lService;
	
	@PostMapping("/applyLoan/{userId}")
	public Loan applyLoan(@RequestBody Loan loan, @PathVariable("userId") int userId)
	{
		
		return lService.applyLoan(loan,userId);
		
	}
	
	
	@PutMapping("/updateLoanDetails")
	public Loan updateLoanDetails(@RequestBody Loan loan)
	{
		return lService.updateLoanDetails(loan);
	}
	
	

	
}
