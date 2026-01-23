// Control Flow Statements in JavaScript

// If- Else Statment (if, if else, if else-if else)
// if (condition) {} ---> condition true hoy to {} code run
if (12 < 13) {
    console.log(true);
}

if (15 < 13) {
    console.log(true);
} // condition is false tht why if statement not run

if (!12) {
    console.log("number");
}

if (!0) {
    console.log("number");
}


// if- else statement
if (12 < 13) {
    console.log(true);
} else {
    console.log(false);
}

if (15 < 13) {
    console.log(true);
} // condition is false tht why if statement not run
else {
    console.log(false); // if if statement condition is false than run this
}

if (!12) {
    console.log("number");
} else {
    console.log("Not A Number");
}

if (!0) {
    console.log("number");
} else {
    console.log("Not A Number");
}

if (0) {
    console.log("number");
} else {
    console.log("Not A Number");
}

let loggedin = true;
let admin = false;
if (loggedin && admin) {
    console.log("welcome admin");
} else if (loggedin) {
    console.log("welcome user");
} else {
    console.log("go to login page");
}


let weaterIsRainy = true;
let RainToday = false;
if (weaterIsRainy && RainToday) {
    console.log("Today is rainy day");
} else if (weaterIsRainy) {
    console.log("But not rain today");
} else {
    console.log("not rainy weather and today is rainy day");
}

// switch case statement 
switch ("BOGO") // value ---> case value sathe karshe ane code run thse
{
    case "First50":
        console.log("50% off on First Order");
        break;
    case "BOGO":
        console.log("Buy one get one");
        break;
    case "BlackFriday":
        console.log("It's Black Friday Sale - get at Rs.50");
        break;
    default:
        console.log("Offer Not Vaild");
}


switch ("rainy") {
    case "sunny":
        console.log("very hot day wear short cloth");
        break;
    case "rainy":
        console.log("today is rainy day go outside and nothing to worry ");
        break;
    case "cold":
        console.log("go to home and take rest untill 12pm");
        break;
    default:
        console.log("weather is unknow");
}

// // Early  return patteren 
// function score(value) {
//     if (value > 90) {
//         return "value is more than 90";
//     } else if (value < 80) {
//         return "value is less than 80";
//     } else if (value < 70) {
//         return "value is less than 70";
//     } else if (value < 60) {
//         return "value is less than 60";
//     } else {
//         return "value is less than 60";
//     }
// }
// score(65);
//  console.log(score(65))

// example 2
// let score = prompt("Enter your marks");
// score = Number(score);

// function getGrade(marks) {
//     if (marks >= 90 && marks <= 100) return "A+";
//     else if (marks >= 80 && marks < 90) return "A";
//     else if (marks >= 70 && marks < 80) return "B";
//     else if (marks >= 60 && marks < 70) return "C";
//     else if (marks >= 33 && marks < 60) return "D";
//     else if (marks >= 0 && marks < 33) return "Fail";
//     else return "Invalid Marks";
// }

// console.log(getGrade(score));

// example 3
function rps1(user, computer) {
    if (user === computer) return "It's a tie!";
    else if (
        (user === "rock" && computer === "scissor") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissor" && computer === "paper")
    ) {
        return "User wins!";
    } else {
        return "Computer wins!";
    }
}

// Example run
console.log(rps1("rock", "scissor"));   // User wins!
console.log(rps1("paper", "rock"));     // User wins!
console.log(rps1("scissor", "rock"));   // Computer wins!
console.log(rps1("rock", "rock"));      // It's a tie!

//    function score1(value) {
//     if (value > 60) return "value is less than 60";
//     else if (value > 70) return "value is less than 70";
//     else if (value > 80) return "value is less than 80";
//     else if (value > 90) return "value is less than 90";
//     else return "value is more than 90";

// }
// score(80);
 
// console.log(score1(80))