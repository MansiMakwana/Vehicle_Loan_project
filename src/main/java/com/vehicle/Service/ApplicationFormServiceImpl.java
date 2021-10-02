package com.vehicle.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vehicle.pojo.Loan;
import com.vehicle.repository.LoanDetailsRepo;

@Service
public class ApplicationFormServiceImpl implements ApplicationFormService{

	@Autowired
	LoanDetailsRepo lRepo;
	
	@Override
	public List<Loan> ViewAllAppForm() throws Exception {
		// TODO Auto-generated method stub
		if(lRepo.findAll() ==null)
			throw new Exception("No Application form found!");
		
		return lRepo.findAll();
	}

	@Override
	public Loan fetchAppById(int userId) {
		
		return lRepo.findByCurrentUserLogin(userId);
	}

	@Override
	public Loan rejectLoan(int userId) {
		Loan loan=lRepo.findByCurrentUserLogin(userId);
		loan.setApplicationStatus("Rejected");
		return lRepo.save(loan);
	}

	@Override
	public Loan approveLoan(int userId) {
		Loan loan=lRepo.findByCurrentUserLogin(userId);
		loan.setApplicationStatus("Approved");
		return lRepo.save(loan);
	}

	@Override
	public List<Loan> getAllApprovedLoan() {
		// TODO Auto-generated method stub
		return lRepo.findByApplicationStatusApproved();
	}

	@Override
	public List<Loan> getAllPendingLoan() {
		// TODO Auto-generated method stub
		return lRepo.findByApplicationStatusPending();
	}

	@Override
	public List<Loan> getAllRejectedLoan() {
		// TODO Auto-generated method stub
		return lRepo.findByApplicationStatusRejected();
	}

}
