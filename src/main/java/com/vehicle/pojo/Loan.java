package com.vehicle.pojo;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "Loan_Details")
public class Loan 
{
	
	@Id
	@Column(name="LOAN_ID")
	@SequenceGenerator(name = "Loan_Id_Seq", sequenceName = "Loan_Id_Seq", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "Loan_Id_Seq")
	private long loanId;

	@Column(name="APPLICATION_STATUS", length=30)
	private String applicationStatus="Pending";

	@Column(name="EMI")
	private float emi;

	@Column(name="INTEREST_RATE")
	private float interestRate;

	@Column(name="LOAN_AMOUNT")
	private float loanAmount;

	
	@Column(name="LOAN_END_DATE")
	private Date loanEndDate;

	
	@Column(name="LOAN_START_DATE")
	private Date loanStartDate;

	@Column(name="LOAN_STATUS", length=30)
	private String loanStatus;

	@Column(name="PROCESSING_FEE")
	private float processingFee;
	
	@Column(name="TENURE")
	private float tenure;

	@Column(name="LOAN_TYPE", length=30)
	private String loantype;



@OneToOne(cascade=CascadeType.ALL)
@JoinColumn(name="USER_ID",referencedColumnName = "USER_ID")
private UserLogin userLogin;



public long getLoanId() {
	return loanId;
}



public void setLoanId(long loanId) {
	this.loanId = loanId;
}



public String getApplicationStatus() {
	return applicationStatus;
}



public void setApplicationStatus(String applicationStatus) {
	this.applicationStatus = applicationStatus;
}



public float getEmi() {
	return emi;
}



public void setEmi(float emi) {
	this.emi = emi;
}



public float getInterestRate() {
	return interestRate;
}



public void setInterestRate(float interestRate) {
	this.interestRate = interestRate;
}



public float getLoanAmount() {
	return loanAmount;
}



public void setLoanAmount(float loanAmount) {
	this.loanAmount = loanAmount;
}



public Date getLoanEndDate() {
	return loanEndDate;
}



public void setLoanEndDate(Date loanEndDate) {
	this.loanEndDate = loanEndDate;
}



public Date getLoanStartDate() {
	return loanStartDate;
}



public void setLoanStartDate(Date loanStartDate) {
	this.loanStartDate = loanStartDate;
}



public String getLoanStatus() {
	return loanStatus;
}



public void setLoanStatus(String loanStatus) {
	this.loanStatus = loanStatus;
}



public float getProcessingFee() {
	return processingFee;
}



public void setProcessingFee(float processingFee) {
	this.processingFee = processingFee;
}



public float getTenure() {
	return tenure;
}



public void setTenure(float tenure) {
	this.tenure = tenure;
}



public String getLoantype() {
	return loantype;
}



public void setLoantype(String loantype) {
	this.loantype = loantype;
}



public UserLogin getUserLogin() {
	return userLogin;
}



public void setUserLogin(UserLogin userLogin) {
	this.userLogin = userLogin;
}



public Loan(long loanId, String applicationStatus, float emi, float interestRate, float loanAmount, Date loanEndDate,
		Date loanStartDate, String loanStatus, float processingFee, float tenure, String loantype,
		UserLogin userLogin) {
	super();
	this.loanId = loanId;
	this.applicationStatus = applicationStatus;
	this.emi = emi;
	this.interestRate = interestRate;
	this.loanAmount = loanAmount;
	this.loanEndDate = loanEndDate;
	this.loanStartDate = loanStartDate;
	this.loanStatus = loanStatus;
	this.processingFee = processingFee;
	this.tenure = tenure;
	this.loantype = loantype;
	this.userLogin = userLogin;
}



public Loan() {
	super();
	// TODO Auto-generated constructor stub
}



@Override
public String toString() {
	return "Loan [loanId=" + loanId + ", applicationStatus=" + applicationStatus + ", emi=" + emi + ", interestRate="
			+ interestRate + ", loanAmount=" + loanAmount + ", loanEndDate=" + loanEndDate + ", loanStartDate="
			+ loanStartDate + ", loanStatus=" + loanStatus + ", processingFee=" + processingFee + ", tenure=" + tenure
			+ ", loantype=" + loantype + ", userLogin=" + userLogin + "]";
}






	

	
	
}
