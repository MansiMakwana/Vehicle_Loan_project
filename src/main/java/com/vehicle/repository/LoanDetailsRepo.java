package com.vehicle.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.vehicle.pojo.Loan;

@Repository
public interface LoanDetailsRepo extends JpaRepository<Loan, Long>
{
	Loan findByLoanId(long tempId);
	
	 @Query("FROM Loan l where l.userLogin.userId = :userId")
	Loan findByCurrentUserLogin(@Param("userId") int userId);
	 
	 
	 @Query("FROM Loan l where l.applicationStatus = 'Approved'")
		List<Loan> findByApplicationStatusApproved();
	 
	 
	 @Query("FROM Loan l where l.applicationStatus = 'Pending'")
		List<Loan> findByApplicationStatusPending();
	 
	 @Query("FROM Loan l where l.applicationStatus = 'Rejected'")
		List<Loan> findByApplicationStatusRejected();
	 
	

}
