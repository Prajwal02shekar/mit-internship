let employee={
    empId:101,
    empName:"Pavan",
    empAge:25,
    empAddress:"Mandya",
    empPhNum:9874563210
}
console.log(employee)

let jsonObj=JSON.stringify(employee)
console.log(jsonObj)

let regularObj=JSON.parse(jsonObj)
console.log(regularObj)