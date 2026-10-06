//! Statements

//? Conditional Statements
//! IF

// let hasDl=false;
// if(hasDl){
//     console.log("You are eligibal to ride a bike")
// }

//! IF -ELSE

// let age=15
// if(age>=18){
//     console.log("You are eligibal to cast vote")
// }else{
//     console.log("You are not eligibal to cast vote")
    
// }
//! IF-ELSE-IF
// let age=5;

// if(age<=11){
//     console.log("Child")
// }else if(age<=18){
//     console.log("teenage")
// }else{
//     console.log("Adult")
// }
//! Nested IF
// let age=15;
// let hasDL=true
// if(age>=18){
//     if(hasDL){
//         console.log("You are eligibal to ride a bike")
//     }else{
//         console.log("You are not eligibal to ride a bike")

//     }
// }else{
//     console.log("You are still child")
// }
//! Switch

// let n1=15;
// let n2=3;

// let operator="**"

// switch(operator){
//     case "+":
//         console.log(n1+n2)
//         break;
//     case "-":
//         console.log(n1-n2)
//         break;
//     case "*":
//         console.log(n1*n2)
//         break;
//     case "/":
//         console.log(n1/n2)
//         break;
//     case "%":
//         console.log(n1%n2)
//         break;
//     case "**":
//         console.log(n1**n2)
//         break;
//     default:
//         console.log("Invalid Operator")
// }
//? Looping Statements

//? while

// let n=5;
// while(n>=1){
//     console.log(n);
//     n--
// }


//? do 

// let n=10;
// do{
//     console.log(n);
//     n--;
// }while(n>=1)


//? for

for(let i=0;i<=10;i++){
    console.log(i)
}
console.log("******")
for(let i=10;i>=1;i--){
    console.log(i)
}