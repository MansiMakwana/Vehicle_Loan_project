import { Userlogin } from "./userlogin";

export class Loan {

    loanId:number|undefined;
    applicationStatus:String|undefined;
    emi:number|undefined;
    interestRate:number=5;
    loanAmount:number|undefined;
    loanEndDate:Date|undefined;
    loanStartDate:Date|undefined;
    loanStatus:String|undefined;
    processingFee:number|undefined;
    tenure:number|undefined;
    loantype:String|undefined;
    userLogin:Userlogin|undefined;
}

