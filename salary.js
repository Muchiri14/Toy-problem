//Creating a function that calculates an individuals net salary//
//Create a function that calculates PAYE//
//Create a Function that deals with NSSF & NHIF deductions//
const prompt=require("prompt-sync")();
function calculateSalary(personalRelief, netSalary, totalDeductions, contributionBenefits, NSSFDeductions, NHIFDeductions, grossSalary, taxedIncome){
    let paye;
    personalRelief= +2400;
    grossSalary= +prompt("total salary")
    contributionBenefits= +prompt("contributions")
    NHIFDeductions= +prompt("nhif deduction")
    NSSFDeductions= +prompt("nssf deduction")

totalDeductions= (personalRelief+contributionBenefits + NHIFDeductions + NSSFDeductions)
taxedIncome= (grossSalary-totalDeductions);

console.log(` Tax income is Ksh.${taxedIncome}`)
console.log(` Total Deduction is Ksh.${totalDeductions}`)

if (taxedIncome <= 24000) {
    paye=taxedIncome * 0.1
} else if (taxedIncome <= 32333) {
    paye=taxedIncome * 0.25
} else if (taxedIncome >= 32333) {

}
netSalary= (taxedIncome - paye)
console.log (` Net Salary is ${netSalary}!`)
}
calculateSalary()

