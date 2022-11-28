const prompt = require("prompt-sync")()
let basicSalary = prompt("Enter your basic salary:")
let NHIFDeductions = prompt("Enter your NHIFDeductions:")
let NSSFDeductions = prompt("Enter your NSSFDeductions:")
let grossSalary = parseInt(basicSalary) + parseInt(NSSFDeductions) + parseInt(NHIFDeductions)
//Calculate the annual tax for the individual
if (grossSalary >=0 && grossSalary <=288000) {
    console.log(grossSalary * 0.1)
}
else if (grossSalary >=288001 && grossSalary <=388000) {
    console.log(grossSalary * 0.25)
}
else {
    console.log(grossSalary * 0.3)
}

console.log("Basic salary: " + basicSalary)
console.log("NHIF Deductions: " + NHIFDeductions)
console.log("NSSFD Deductions: " + NSSFDeductions)
console.log("Gross Salary: " + grossSalary)
