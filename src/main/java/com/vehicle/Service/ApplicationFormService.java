package com.vehicle.Service;

import java.util.List;

import com.vehicle.pojo.Loan;

public interface ApplicationFormService {

	List<Loan> ViewAllAppForm() throws Exception;

	Loan fetchAppById(int userId);

	Loan rejectLoan(int userId);

	Loan approveLoan(int userId);

	List<Loan> getAllApprovedLoan();

	List<Loan> getAllPendingLoan();

	List<Loan> getAllRejectedLoan();

	

}
