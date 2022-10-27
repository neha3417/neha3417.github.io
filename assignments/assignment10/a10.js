
let Sam = {
    "name": "Sam",
    "department": "Tech",
    "designation": "Manager",
    "salary": 40000,
    "raise": "true" 
}

let Mary = {
    "name": "Mary",
    "department": "Finance",
    "designation": "Trainee",
    "salary": 18500,
    "raise": "true"
}

let Bill = {
    "name": "Bill",
    "department": "HR",
    "designation": "Executive",
    "salary": 21200,
    "raise": "false"
}

console.log("problem 1", Sam, Mary, Bill);

//var employees = ;

//console.log(employees);

let TechStars = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": [Sam, Mary, Bill]
}

console.log("problem 2", TechStars);

let Anna = {
    "name": "Anna",
    "department": "Tech",
    "designation": "Executive",
    "salary": 25600,
    "raise": "false"
}

//console.log(employees);
TechStars.employees.push(Anna);

//console.log(employees);

console.log("problem 3", TechStars);

let sum = 0;

for (let i = 0; i < 4; i++){
    sum += TechStars.employees[i].salary;
}

console.log("problem 4", sum);

for (let i = 0; i < 4; i++){
    if ((TechStars.employees[i].raise) == "true"){
        TechStars.employees[i].salary = TechStars.employees[i].salary * 1.1;
        TechStars.employees[i].raise = "false";
    }
}

console.log("problem 5", TechStars);

for (let i = 0; i < 4; i++){
    TechStars.employees[i].wfh = "false";
    if (((TechStars.employees[i].name) == "Anna") || ((TechStars.employees[i].name) == "Sam")){
        TechStars.employees[i].wfh = "true";
    }
}

console.log("problem 6", TechStars);
