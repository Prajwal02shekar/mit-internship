
let student={
    stdId:101,
    stdName:"Lakshmi",
    stdAge:23,
}
console.log(student)
// console.log(student.stdId)
// console.log(student.stdName)
// console.log(student.stdAge)

// //? Adding a new property

// student.stdPh=987463210;
// console.log(student)

// //? Updating a value of object property


// student.stdName="Lakshmi Naryan"
// console.log(student)

// //? Delete a property

// delete student.stdAge
// console.log(student)



//? Object Inbuilt Methods

// console.log(Object.keys(student))
// console.log(Object.values(student))
// console.log(Object.entries(student))



// Object.freeze(student)
// console.log(Object.isFrozen(student))


// //? Adding a new property

// student.stdPh=987463210;
// console.log(student)

// //? Updating a value of object property


// student.stdName="Lakshmi Naryan"
// console.log(student)

// //? Delete a property

// delete student.stdAge
// console.log(student)



Object.seal(student)
console.log(Object.isSealed(student))


// //? Adding a new property

// student.stdPh=987463210;
// console.log(student)


// //? Updating a value of object property


// student.stdName="Lakshmi Naryan"
// console.log(student)


// //? Delete a property

delete student.stdAge
console.log(student)