// Array - Hold multiple values at same time
// ["Mobile", "Laptop", "Tablet", 5000, 25, 588]
// ["a", "b", "Hello"]
// [2, 4, 5, 6]
// create
// variable_name = [values]
let arr4 = [1, 2, 3, 4];
// access
// position = [0123]
// access
// array_name [position / index]
arr4[0]
// modify
// array_name [position] = new value
arr4[0] = 10;
arr4[1] = 20;
arr4[2] = 30;
arr4[3] = 40;

// Array Methods:
// push, pop, shift, unshift, splice, slice, reverse, sort
// push -> enter new value into array -place it into last
let a = [1, 2, 3, 4, 5];
// variable || function.method --> koi variable ke function in pachhal value add karva mate
a.push(700);
console.log(a);

// pop --> remove last value into array
let b = [10, 20, 30, 40];
b.pop();
console.log(b);

//example-self:1
let product = ["iphone15","iphone16","iphone17","iphone18"];
//remove the product
// use case -remove last producat you add into your list
product.pop();
console.log(product);

//add the value
// use case -enter new probucats into existing producats list
product.push("iphone19","iphone20");
console.log(product);

//shift -- remove first value into Array
let c = [30, 40, 50, 60];
c.shift();
console.log(c);


// unshift add value into array first
let d = [52, 35, 65, 85];
 d.unshift(20);
console.log(d);

// example-self:2
//remove at the first
// use case remove old producat automatic after sometimes
product.shift();
console.log(product);
//add at the first
// use case add a value into top of that data you receive -
product.unshift("iphone21");
console.log(product);

// splice remove value into array --specific position and specific number of values
// into () -first index(position), how many value you want to remove
let e = [50, 60, 30, 40, 10];
e.splice(3, 2);
 //e.splice(3, 0, 50, 100)

// use case select msg and remove multiple msg at on click
// slice -copy values from array specific position and specific number of values
// new variable array_name.slice(start index,end index) 
 // start index --include into copy
// end index -- not include into copy
let f = [100, 50, 25, 0];
let new_f = f.slice(0, 2);
console.log(f);

//example-self:3
// use case select msg and remove multiple msg at on click
let message1 =["hi","hello","good","bye"];
message1.splice(1,3);
console.log(message1);
//hi print thay

// generate a report based on date and generate a file or save the file into your local machine
// splice vs slice

// splice remove value into main array or modify new array
// use case -- copy specific data and save it into new variable
let message2 =["hi","hello","good","bye"];
let msg= message2.slice(0,2);
console.log(msg);
//hi,hello print thay

//e.splice(0,3);
//console.log(e);
// slice - copy value from main array and create a new array that hold the value that you can into I


// reverse -reverse value of array
let g = [25, 30, 35, 40, 85];
// g.reverse();


// sort -- set into ascending order
let h = [50, 20, 80, 10, 40];
//h.sort();

//example-self:3
// use case show latest update first into your fronted
let i =[500,700,300,200];
i.reverse();

let i1 =[5000,7000,3000,2000];
//i1.sort();

// use case show latest update first into your fronted
//i1.sort().reverse();


let h1 = [11, 62, 3, 4, 25];
let sr = h1.sort
    (function(a, b){
    return a - b; // ascending order -
})

//ARRAY
//5
let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
//students.splice(1,1);
// students.splice(1,1);
// students.slice(0,1);
students.splice(1,1,'john','sara');
//6
let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
menu.splice(1,2);

//7
let days1 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let weekday = days1.slice(5,8);

//8
let levels = ['Easy', 'Medium', 'Hard'];
levels.reverse();

//9
let scores = [45, 12, 78, 34, 89];
scores.sort();

//10
let prices = [199, 49, 999, 299, 149];
let prices1 = prices.sort
(function(a,b){
    return a-b;
})

//11
let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
let pro = products.splice(0,3);

//12
let colors = ['Red', 'Green', 'Blue', 'Yellow'];
colors.splice(2, 1, 'Purple', 'Orange')

// //13
// let steps = ['Step 1', 'Step 2', 'Step 3'];
// steps.reverse().push('final round');

//14
let names = ['alice', 'Bob', 'charlie', 'David'];
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))

//15
let movies = ['Avatar', 'Titanic', 'Gladiator'];
movies.push("inseption");
movies.shift();
movies.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))

// movies.push("inspection").shift().sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))

//17
let nums1 = [1, 2, 3, 4];
nums1.splice(1, 2);

//18
let nums2 = [10, 20, 30, 40];
let result = nums2.slice(1, 3);

//19
let letters = ['a', 'b', 'c'];
let reversedLetters = letters.reverse();

//21
let arr1 = ['x', 'y', 'z'];
arr1.splice(1, 0, 'new');

//23
let values = [100, 200, 300, 400, 500];
let sliced = values.slice(-3, -1);

//24

//25
let arr2 = [1, 2, 3];
arr2.push(arr2.shift());

// For Each Loop
// for Each --Array ni darek value mate loop chalse
let i5= [10, 35, 40, 68];
i5.forEach((val) => {
let new_val = val + 10;
console.log(new_val);
});
// //answer:20, 45, 50,78

[5, 58, 42, "Hello"].forEach (val =>{
let new_arr = val + 2;
console.log(new_arr)
})
//answer:7, 60, 44, hello2

//.map() Method:
// map tyare j use karvu ke jyare ek new array create karvo chhe
// first map create a black array -- only for understanding
let data = [10, 20, 50, 40, 15];
// same like a for each loop but map return a newarray
let temp_data = data.map((val)=>{
if (val >= 5 ){
return val;
}
});
console.log(temp_data); 

//new array ma store karva hoy
// if you want to show only electronics producat on your homepage
let marks = [10, 5, 20, 25, 15]
let final_marks = marks.map((val) => {
if(val == 5) {
return val + 4;
}
return val;
});
console.log(final_marks); 
//answer:[10, 9, 20, 25, 15]

// filter
// filter tyare use karvu ke jyare ek new array create karvo chhe with condition
// in return true/false
// if true --> add into new array
// if else(false) --> not add into new array
let laptops_price = [15000, 20000, 30000, 65000, 99000, 45000];
let expensive_laptops = laptops_price.filter((price)=> {
     if (price > 30000) return true;
});
console.log(expensive_laptops); 
//answer:[65000, 99000, 45000]

// je value 30000 thi vadhare chhe te new array ma
//add thase and briji value ne array ma add nahi kare

// use case data ma thi specific data new array ma store karvo hoy band off condetion
// ex. poduct ma thi specific price na producat new array ma store karva hoy
// if you want to show only expensive producat on your homepage
// if you want to filter producat based on price
let product_type = ["Mobile", "Tablet", "Laptop", "Mouse", "Keyborad"];
let filter_product_type = product_type.filter((type)=>{
if (type === "Tablet" || type == "Mobile") 
    return true;
});
console.log(filter_product_type); 

// reduce
// reduce tyare j use karvu ke jare ek single value calculate karvi hoy from array

let total_price = [1, 3, 5, 7, 10];
//let total_price = [10, 68, 45, 58, 52, 48];
let final_price = total_price.reduce((accumulator,val) => {
return accumulator + val;
}, 0); // intial value of accumulator
// theta + 10 =>10
// 18 + 68 =>78
// 78 + 45 =>123
console.log("Final Price:", final_price);

// find
// find tyare j use karvu ke jare array mathi ek value find karvi hoy based on condition
// find() return kare chhe array no element > callback no return value nahi
// never returns what you return inside it
// returns the array element itself not return array
//.find() stops at the first match
// It does not continue looping
let product1 = ["Laptop", "Mobile", "Tablet", "desktop", "Smart Watch"];

let find_product1 = product1.find((item) => {
console.log("can't find product"); // not working why??
    if (item == "Tablet") {   
        return true;
    } else if (item == "Smart Watch") {
        return true;
    } else {
        return false;
    }
    });
console.log(filter_product_type); 
//answer: 3 times: can't find product
// 2 times: ['Mobile', 'Tablet']


// find vs filter
// Real-life Scenario: Shopping Mall Security
// your are a security guard at a shopping mall
// check the list of visitors
let people = ["John", "Sara", "Mike", "Anna",
"David", "Sara"];

// find ---> you are looking for the first person
// named "Sara" in the list and stop searching (Pehli

// var j male, bas e j and Anagal check ij na kare)
let person = people.find((name) => name === "Sara");
console.log(person)

//filter --> you want to find all visitors named "sara" in the list (all data check kare and list na end sudhi check kare)
let Allsara = people.filter((name) => name === "Sara");
console.log(Allsara);

//eaxmple 2: books bus for travel
// some
// check kare chhe ke array ma koi pan" ek item codition satisfy kare" chhe ke nahi
// condition true aave tyare stop kare
// some() vs find() --> some() can't return you value its return true or false, find() return value of array
// give ans in true and false
let marks2 = [10, 20, 35, 80];
let any =  marks2.some( (val) => {
if (val < 85) return 12;
// if (val < 85) return "need improvement";
});
//IF ANY 1 VALUE ADD THEN GIVE THE TRUE OTHERWISE FALSE..
// use case --check if some product are out of stock in your cart

// every
// check kare chhe ke array ma baddha j items
// condition satisfy kare chhe ke nahi
// true -- baha items condition match kare
// false -- ek pan fail thay to

let def = [20, 30, 40, 50];
let num = def.every(function(val){
    return val < 20;
})


// use case --> check all student is pass or not

// some(), find(), filter(), every()

// let products = ["Tablet", "Mobile", "Laptop","Mobile"]

// method --> condition --> output

//.some()   --> item === "Mobile" --> true
// .find()   --> item === "Mobile" --> "Mobile"
// .filter() --> item === "Mobile" --> ["Mobile",
// "Mobile"]

// .every()  --> item === "Mobile" --> false

// Destructuring operator -- give value to variable
// (ex. we don't use everytime arr4[1], just save it
// into variable let j, k) = arr1)

// let arr4 = [1, 2, 3, 4, 5]
// let [j, k] = arr4; // --> desthucturing
// //  let [j, , k] = arr4;
// console.log(k);

// let temp_a = arr4[4]
// let temp_b = arr4[2]
// let temp_c = arr4[1]
// let user_data = ["text","text@gmail.com","male","surat"]


// spread oprator --copy value from main array
let arr8 = [1, 2, 3, 4, 5, 6, 7];

// let arr4 = arr3; //just give reference not change arr3 too) copy value (when you change into arr4 that will be
let arr9 = [...arr8];
//... --> rest --> into function
//... --> spred --> into Array and Object


const steps = [1000, 2000, 3000];

function doubleSteps(step) {
  return step * 2;
}

const newSteps = steps.map(doubleSteps);



// filter() = condition true hoy to value new array ma add thay
// false hoy to ignore thay


// 1. Get even numbers
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);
// Explanation: %2===0 means even number
// Answer: [2,4,6]



// 2. Filter adults
const ages = [2, 1, 10, 16, 5];
const adults = ages.filter(age => age >= 18);
console.log("Adults:", adults);
// Explanation: age >=18 adult
// Answer: [] (koi adult nathi)



// 3. Remove empty items
const inputs = ['Hello', '', 'World', '', 'JS'];
const validInputs = inputs.filter(text => text !== '');
console.log("Valid Inputs:", validInputs);
// Explanation: empty string '' remove kari
// Answer: ["Hello","World","JS"]



// 4. Passing marks
const marks1 = [35, 72, 88, 40, 25];
const passedStudents = marks1.filter(mark => mark >= 40);
console.log("Passed Students:", passedStudents);
// Explanation: 40 thi ochu fail
// Answer: [72,88,40]



// 5. Affordable prices
const prices2 = [199, 499, 999, 1499, 299];
const affordable = prices2.filter(price => price <= 500);
console.log("Affordable Prices:", affordable);
// Explanation: <=500 cheap products
// Answer: [199,499,299]



// 6. Long words
const words = ['hi', 'hello', 'javascript', 'ok'];
const longWords = words.filter(word => word.length > 3);
console.log("Long Words:", longWords);
// Explanation: length >3 words select
// Answer: ["hello","javascript"]



// 7. Positive transactions
const transactions = [200, -100, 500, -50, 300];
const credits = transactions.filter(amount => amount > 0);
console.log("Credits:", credits);
// Explanation: positive = credit
// Answer: [200,500,300]



// 8. Numbers in range
const scores1= [45, 60, 85, 30, 90];
const selectedScores = scores1.filter(
  score => score >= 50 && score <= 90
);
console.log("Selected Scores:", selectedScores);
// Explanation: 50–90 vachche values
// Answer: [60,85,90]

//  1. Total money in wallet
const money = [100, 200, 50];
const totalMoney = money.reduce((sum, amount) => sum + amount, 0);




//  2. Total steps walked in a week
const steps1 = [3000, 5000, 4000, 6000];
const weeklySteps = steps1.reduce((total, step) => total + step, 0);


//  3. Find total cart price
const prices3 = [499, 299, 199];
const totalPrice = prices3.reduce((total, price) => total + price, 0);


// 4. Find maximum score
const marks3 = [45, 88, 67, 92];
const highest = marks3.reduce((max, mark) => {
  return mark > max ? mark : max;
}, marks[0]);


// 5. Count total characters
const words2 = ['Hi', 'Hello', 'JS'];
const totalChars = words2.reduce((count, word) => count + word.length, 0);

// 6
const words1 = ['Learning', 'JavaScript', 'is', 'fun'];
const sentence = words1.reduce((text, word) => text + ' ' + word);

// 7
const marks4 = [35, 72, 88, 40, 25];
const passCount = marks4.reduce((count, mark) => {
  return mark >= 40 ? count + 1 : count;
}, 0);

// 8
const transactions1 = [1000, -200, -300, 500];
const finalBalance = transactions.reduce((balance, amount) => balance + amount, 0);

// 9
const items = ['Pen', 'Book', 'Pencil'];
const result1 = items.reduce((text, item) => text + ', ' + item);

// _______________________________________________________________________________

// =============================
// JavaScript Practice Answers
// Using: filter() → map() → reduce()
// VS Code style single page
// =============================

// Q1 Grocery Store – Total Cost
const prices0 = [50, 120, 300, 80, 200];
const totalCost = prices0
  .filter(p => p > 100)        // keep items >100
  .map(p => p * 1.05)          // add 5% tax
  .reduce((a,b)=>a+b,0);       // total
console.log("Q1:", totalCost);

// Q2 Fitness Calories
const minutes = [10, 25, 40, 15, 60];
const calories = minutes
  .filter(m=>m>=20)
  .map(m=>m*4)
  .reduce((a,b)=>a+b,0);
console.log("Q2:", calories);

// Q3 Passed Marks
const marks0 = [35,55,80,20,45];
const passedTotal = marks0
  .filter(m=>m>=40)
  .reduce((a,b)=>a+b,0);
console.log("Q3:", passedTotal);

// Q4 Bank Credits
const transactions0 = [500,-200,1000,-300,700];
const credits0 = transactions0
  .filter(t=>t>0)
  .reduce((a,b)=>a+b,0);
console.log("Q4:", credits0);

// Q5 Discount Bill
const prices6 = [800,1500,3000,600,1200];
const discountBill = prices6
  .filter(p=>p>1000)
  .map(p=>p*0.85)
  .reduce((a,b)=>a+b,0);
console.log("Q5:", discountBill);

// Q6 Attendance Points
const hours1 = [5,7,8,6,9];
const points = hours1
  .filter(h=>h>=7)
  .map(h=>h*10)
  .reduce((a,b)=>a+b,0);
console.log("Q6:", points);

// Q7 Delivery Distance
const distances = [3,6,10,4,8];
const totalDistance = distances
  .filter(d=>d>5)
  .map(d=>d+1)
  .reduce((a,b)=>a+b,0);
console.log("Q7:", totalDistance);

// Q8 Salary System
const salaries = [18000,25000,30000,15000];
const payout = salaries
  .filter(s=>s>20000)
  .map(s=>s+2000)
  .reduce((a,b)=>a+b,0);
console.log("Q8:", payout);

// Q9 Study Time
const hours2 = [0.5,1.5,2,0.75,3];
const studyMinutes = hours2
  .filter(h=>h>1)
  .map(h=>h*60)
  .reduce((a,b)=>a+b,0);
console.log("Q9:", studyMinutes);

// Q10 Electricity Bill
const units = [80,120,200,90,150];
const bill = units
  .filter(u=>u>100)
  .map(u=>u*6)
  .reduce((a,b)=>a+b,0);
console.log("Q10:", bill);

// Q11 Game Score
const scores4 = [30,50,90,20,70];
const powerScore = scores4
  .filter(s=>s>40)
  .map(s=>s*2)
  .reduce((a,b)=>a+b,0);
console.log("Q11:", powerScore);

// Q12 Travel Fare
const rides = [5,12,20,8,15];
const fare = rides
  .filter(r=>r>10)
  .map(r=>r+50)
  .reduce((a,b)=>a+b,0);
console.log("Q12:", fare);

// Q13 Productive Hours
const hours3 = [4,6,8,5,9];
const productiveMinutes = hours3
  .filter(h=>h>=6)
  .map(h=>h*60)
  .reduce((a,b)=>a+b,0);
console.log("Q13:", productiveMinutes);

// Q14 Reward Coins
const purchases = [300,800,1200,400];
const coins = purchases
  .filter(p=>p>500)
  .map(()=>10)
  .reduce((a,b)=>a+b,0);
console.log("Q14:", coins);

// Q15 Fuel Cost
const liters = [3,6,10,4,8];
const fuelCost = liters
  .filter(l=>l>5)
  .map(l=>l*105)
  .reduce((a,b)=>a+b,0);
console.log("Q15:", fuelCost);

// Q16 Sum of Cubes
const numbers1 = [1,2,3,4,5];
const cubeSum = numbers1
  .filter(n=>n%2!==0)
  .map(n=>n**3)
  .reduce((a,b)=>a+b,0);
console.log("Q16:", cubeSum);

// Q17 Bonus Points
const scores2 = [10,20,30,40,50];
const avg = scores2.reduce((a,b)=>a+b,0)/scores2.length;
const bonusScore = scores2
  .filter(s=>s>avg)
  .map(s=>s+5)
  .reduce((a,b)=>a+b,0);
console.log("Q17:", bonusScore);

// Q18 Subscription Bill
const plans = [199,399,599,299];
const finalBill = plans
  .filter(p=>p>300)
  .map(p=>p*1.18)
  .reduce((a,b)=>a+b,0);
console.log("Q18:", finalBill);

// Q19 Achievement Score
const scores3 = [45,60,70,30,80];
const achievement = scores3
  .filter(s=>s>=60)
  .map(s=>s*s)
  .reduce((a,b)=>a+b,0);
console.log("Q19:", achievement);

// Q20 Interview Finisher
const numbers2 = [3,6,9,10,12];
const finalSum = numbers2
  .filter(n=>n%3===0)
  .map(n=>n*10)
  .reduce((a,b)=>a+b,0);
console.log("Q20:", finalSum);



