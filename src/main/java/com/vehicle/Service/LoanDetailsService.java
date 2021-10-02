package com.vehicle.Service;

import com.vehicle.pojo.Loan;

public interface LoanDetailsService {

	Loan applyLoan(Loan loan, int userId);

	Loan updateLoanDetails(Loan loan);

}
