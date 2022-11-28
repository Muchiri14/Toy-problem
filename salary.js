//Creating a function that calculates an individuals net salary//
//Create a function that calculates PAYE//
//Function that deals with NSSF & NHIF deductions//
let lowerValue = 20001;
let personalRelief = 2400;
let nssf = 200;
function netSalary (salary, benefits) {
    let paye = () => {
        const basicSalary = salary;
        let tax = basicSalary - benefits
    }
    if (salary <= 20001){
        const tax = (20001 * 0.1) - 2400;
        return tax;
    } else if (salary > 20001) {
        const tax = (20001 * 0.1) + (0.25 *(salary)) - personalRelief
        return tax;

    }

