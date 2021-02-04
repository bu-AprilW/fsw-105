function Employee(name, jobTitle, salary, fullTime) {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.fullTime = fullTime
}

Employee.prototype.status = function() {
    console.log(this.fullTime)
}
 
const emp1 = new Employee("Dan Smith", "Supervisor", "18/hr", "Full Time")
const emp2 = new Employee("Rosa Mason", "Customer Service", "14/hr", "Full Time")
const emp3 = new Employee("Moe Burns", "Cashier", "12/hr", "Part Time")

const printEmployeeForm = [emp1, emp2, emp3]

console.log(printEmployeeForm)