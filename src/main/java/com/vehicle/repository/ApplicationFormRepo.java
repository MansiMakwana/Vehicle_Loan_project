package com.vehicle.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vehicle.pojo.Loan;

public interface ApplicationFormRepo extends JpaRepository<Loan, Long>{

}
