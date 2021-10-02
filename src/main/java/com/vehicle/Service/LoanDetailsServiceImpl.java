package com.vehicle.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vehicle.pojo.Loan;
import com.vehicle.pojo.UserLogin;
import com.vehicle.repository.LoanDetailsRepo;
import com.vehicle.repository.UserLoginRepo;


@Service
public class LoanDetailsServiceImpl implements LoanDetailsService{

	
	@Autowired
	private LoanDetailsRepo lRepo;
	
	@Autowired
	private UserLoginRepo uLRepo;
	
	
	public float calculate(float P, float R, float n)
	{
		float EMI=0;
		
		R=(R/100)/12;
		
		EMI=(float)( P*R* ( ( Math.pow((1+R),n) )/ ((Math.pow((1+R),n))-1) ));
	
		return EMI;
	}
	
	@Override
	public Loan applyLoan(Loan loan, int userId) {

				
		float P=loan.getLoanAmount();
		float R=loan.getInterestRate();
		float n=loan.getTenure();
		
		
		/*
		 * 
		P: Principal Amount
		R: Rate of Interest per month
		n: Tenure of loan in months
		E= P*R[ ( (1+R)^n)/ ( ( (1+R) ^n)-1 )]
		 */
		
		
	//	float EMI = ;
		
		loan.setEmi((float)Math.ceil(calculate(P,R,n)));
		
		UserLogin tempUser=uLRepo.findByUserId(userId);
		loan.setUserLogin(tempUser);
		
		return lRepo.save(loan);
	}

//	@Override
//	public Loan applyLoan(Loan loan, int userId) {
//		// TODO Auto-generated method stub
//		return null;
//	}

	

	@Override
	public Loan updateLoanDetails(Loan loan) {
		// TODO Auto-generated method stub
		float P=loan.getLoanAmount();
		float R=loan.getInterestRate();
		float n=loan.getTenure();
		long tempID=loan.getLoanId();
		Loan l=lRepo.findByLoanId(tempID);
		
		l.setEmi((float)Math.ceil(calculate(P,R,n)));
		l.setInterestRate(R);
		l.setLoanAmount(P);
		l.setTenure(n);
		return lRepo.save(l);
	}

	

}
