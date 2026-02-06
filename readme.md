<h1>Example or Excercise:</h1>
<div>
<h3>Example 1 :</h3>
<p>console.log(nm);</p>
<p>let nm = "name";</p>
<p>Answer or Error: </p>
<p>Why : let is Cannot access nm before initialization</p>
</div>
 
<div>
<h3>Example 2 :</h3>
<p>console.log(b);</p>-
<p>var b = "username";</p>
<p>Answer or Error: </p>
<p>Answer : undefined because var is assigned in top </p>
<p>Why : </p>
</div>
 
<div>
<h3>Example 3 :</h3>
<p>var x = 1;</p>
<p>{
    var x= 2;
}
</p>
<p>console.log(x);</p>
<p>Answer or Error: 2</p>
<p>Why : because var is global scoped not block scoped </p>
</div>
 
<div>
<h3>Example 4 :</h3>
<p>let a = 10; </p>
<p>{
    let a = 20;
    console.log("Inside:", a);
}</p>
<p>
console.log("Outside:", a);
</p>
<p>Answer or Error: inside is 20 and outside is 10 </p>
<p>Why : let is block scoped</p>
</div>
 
<div>
<h3>Example 5 :</h3>
<p>const person = {name: "demo"}; </p>
on console.log
<p>person.name= "user"; ✅</p>
<p>person = {} ; ❌ </p>
<p>Answer or Error: Assignment to constant variable. </p>
<p>Why :beacuse value is  const variable cannot be changed and reassigened </p>
</div>

_______________________________________________________________________________________________________

Javascript Datatype:
<h3>Example 1 :</h3>
<p>true + false </p>
<p>answer is = 1</p>
<p>why : 1 + 0 = 1 (because true consider 1 and false consider 0)</p>
</div>
 
<div>
<h3>Example 2 :</h3>
<p>null + 1 </p>
<p>answer is 1</p>
<p> beacuse null consider 0 so 0+1 = 1
</div>
 
<div>
<h3>Example 3 :</h3>
<p>"12" + 12 </p>
<p>answer is = 1212</p>
</div>
 
<div>
<h3>Example 4 :</h3>
<p>!! undefined</p>
<p>answer is : false</p>
<p> why : ! this not is boolean value one ! convert into true and !!(two) convert into false </P>
</div>
 
<div>
<h3>Example 5 :</h3>
<p>"12" - 1 </p>
<p>answer is 11 </p>
<p> why : bacuse sub is consider  "" string is not consider as string </p>
</div>
 
<div>
<p> why typeof NaN --> number </p> 
<p>NaN is a failed number oprations that why that type is number</p>
<p> ex. "hello" + 5 --> NaN</p>
<p>answer is : hello5 </p>
<p> why : nan is cosider invalid mathamatics so it return number </P>
</div>
 
<div>
<p>Undefined vs Null</p>
<p>let x;</p>
<p>console.log(x);</p>
<p>let y = null;</p>
<p>console.log(y);</p>
<p>answer is  x=undefined and y=null</p>
<p>why : we not define any x value and we give value  y  null value 
</p>
</div>

_____________________________________________________________________________________________________________________


<div>
<h1>Example 1 :</h1>
<p>let x = 10;</p>
<p>let y = 20;</p>
<p>if(x>5 && y > 5){
    console.log("Both are greater than 5");
}else{
    console.log("One or both are not greater than 5");
}</p>
<p>Output: Both are greater than 5</p>
<p>and condition is both are true than true</P>
</div>

<div>
<h1>Example 2 :</h1>
<p>let isAdmin = true;</p>
<p>let isLoggedIn = false;</p>
<p>if(isAdmin || isLoggedIn){
    console.log("Acess granted");
}else{
    console.log("Acess Denied");
}</p>
<p>Output: Access granted</p>
<p>Reason: OR needs only one true.</P>
</div>

<div>
<h1>Example 3 :</h1>
<p>let temp = 35;</p>
<p>if(!(temp > 30)){
    console.log("Hot day");
}else{
    console.log("Pleasant day");
}</p>
<p>Output: Pleasant day</P>
<p>Reason: NOT operator reverses the condition.</P>
</div>

<div>
<h1>Example 4 :</h1>
<p>let a = 0;</p>
<p>if(a){
    console.log("Truthy value");
}else{
    console.log("Falsy value");
}</p>
<p>Output: Falsy value</p>
<p>Reason: 0 is a falsy value in JavaScript.</P>
</div>

<div>
<h1>Example 5 :</h1>
<p>let score = 78;</p>
<p>let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";</p>
<p>console.log("Grade:", grade);</p>
<p>Output: Grade: C</p>
<p>Reason: 78 ≥ 70 so grade is "C".</p>
</div>

<div>
<h1>Example 6 :</h1>
<p>let points = 120;</p>
<p>let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";</p>
<p>console.log("Status:", status);</p>
<p>Output: Status: Gold</P>
<p>
</div>

<div>
<h1>Example 7:</h1>
<p>let loggedIn = true;</p>
<p>let hasToken = false;</p>
<p>let access = loggedIn && hasToken ? "Allow" : "Deny";</p>
<p>console.log("access:", access);</p>
<p>Output: access: Deny</p>
<p> because and consider true + faluse = faluse</p>
</div>

<div>
<h1>Example 8:</h1>
<p>let a = 5;</p>
<p>a++</p>
<p>console.log(a);</p>
<p>Output: 6</P>
<p>Reason: Value increases after use.</p>
</div>

<div>
<h1>Example 9:</h1>
<p>let a = 8;</p>
<p>++a</p>
<p>console.log(a);</p>
<p>Output: 9</P>
<p>Reason: Value increases before use.</P>
</div>

<div>
<h1>Example 10:</h1>
<p>let b = 4;</p>
<p>let c = b++</p>
<p>console.log(b, c);</p>
<p>Output: 5 4</p>
<p>Reason: first c = 4, then b becomes 5.</p>
</div>

<div>
<h1>Example 11:</h1>
<p>let b = 4;</p>
<p>let c = ++b</p>
<p>console.log(b, c);</p>
<p>Output: 5 5</P>
<p>Reason:
++b is pre-increment.
First b becomes 5, then assigned to c.</p>
</div>

<div>
<h1>Example 11:</h1>
<p>let m = 10;</p>
<p>console.log(m--)</p>
<p>console.log(m);</p>
<p>output : 10 9 </p>
<p>m-- prints first, then decreases.</p>
</div>

<div>
<h1>Example 11:</h1>
<p>let n = 5;</p>
<p>let result = n++ + ++n;</p>
<p>console.log(result);</p>
<p>output : 12</P>
<p>Reason:
n++ → 5 (then n = 6)
++n → 7
5 + 7 = 12</P>

</div>

<div>
<h1>Example 11:</h1>
<p>let likes = 100;</p>
<p>function likePost(){
result ++likes;
}</p>
<p>console.log(likePost());</p>
<p>console.log(likes);</p>
<p>output : undefind </p>
<p>Reason:
Function does not return anything, so it prints undefined.
likes++ increases value to 101.</P>
</div>

<div>
<h1>Example 12:</h1>
<p>let count = 5;</p>
<p>if(count-- === 5){   
console.log("Matched");
}else{
    console.log("Not Matched"); 
}</p>
<p>Output: Matched
Reason:
count-- compares first (5 === 5 → true),
then count becomes 4.</P>
<p></p>
</div>

_________________________________________________________________________________________________

<div>
<h1>Example 1 :</h1>
<p>let x = 2;</p>
<p>switch(x){
   case 2:
   console.log("Two");
   case 3:
   console.log("Three");
}</P>
<p>output : two three </p>
<p>Reason: bacuse we not write break statement
</P>
</div>

<div>



<div>
<h1>Example 2 :</h1>
<p>Write a function getGrade(score) that:</p>
<p> Takes A student's score as input (0 to 100)</P>
<p>Returns the grade based on below logic:</P>
<p>90-100 A+</P>
<p>80-89 A</P>
<p>70-79 B</P>
<p>60-69 C</P>
<p>33-59 D</P>
<p>0-32 Fail</P>
<p>Anything Else Invalid Marks</P>
<p>output :
let score = prompt("Enter your marks");
score = Number(score);

function getGrade(marks) {
    if (marks >= 90 && marks <= 100) return "A+";
    else if (marks >= 80 && marks < 90) return "A";
    else if (marks >= 70 && marks < 80) return "B";
    else if (marks >= 60 && marks < 70) return "C";
    else if (marks >= 33 && marks < 60) return "D";
    else if (marks >= 0 && marks < 33) return "Fail";
    else return "Invalid Marks";
}

console.log(getGrade(score));

 </p>
<p>Reason: 
</P>
<div>



<div>
<h1>Example 3 :</h1>
<p>Rock-Paper-Scissors:</p>
<p>rock - scissors --> rock</P>
<p>paper - rock --> paper</P>
<p>scissors - paper --> scissors</P>
<p>output:function rps1(user, computer) {
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
console.log(rps1("rock", "scissor"));   

<div>

loop


<div>
<h1>Example 1:</h1>
let a=1;
do{
    console.log("do while loop",a);
    a++;
    }    while(a<11);

for (let i = 1; i <= 10; i++) {
    console.log(i)
}
<p>Print number from 1 to 10 using a for loop.</p>
</div>

<div>
<h1>Example 2:</h1>

   let a=10;
do{
    console.log("do while loop",a);
    a--;
    }    while(a>1);

for (let j = 10; j >= 1; j--) {
    console.log(j)
}

<p>Print number from 10 to 1 using while loop.</p>
</div>

<div>
<h1>Example 3:</h1>
<p>Print even numbers from 1 to 20 using for loop.</p>
<p>

for(let i=1;i<=20;i++){
        if(i%2 === 0){  <p> we add for odd no if(i%2 === 1)
            console.log(i);
        }
    }

    for(let x=1;x<=20;x+=2){
        console.log(x);
        
    }
 </p>
</div>

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

//13
let steps = ['Step 1', 'Step 2', 'Step 3'];
steps.reverse().push('final round');

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
// into variable let j, k) = arr1

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

--------------------------------------------------------------------------------------------
1. Double daily steps count

Real life: Fitness app doubling step goal

const steps = [1000, 2000, 3000];

function doubleSteps(step) {
  return step * 2;
}

const newSteps = steps.map(doubleSteps);

answer : [2000, 4000, 6000]




2. Convert minutes to seconds

Real life: Video duration calculation

const minutes = [1, 5, 10];

const seconds = minutes.map(function(min) {
  return min * 60;
});
answer : [60, 300, 600]




3. Add ₹50 delivery charge to prices

Real life: Food delivery app

const prices = [200, 350, 500];

const finalPrices = prices.map(price => price + 50);
answer :[250, 400, 550]



4. Convert exam marks to grades

Real life: Result system

const marks = [35, 72, 88, 40];

function getGrade(mark) {
  return mark >= 40 ? 'Pass' : 'Fail';
}

const grades = marks.map(getGrade);
answer : ["Fail", "Pass", "Pass", "Pass"]



5. Capitalize names

Real life: Display usernames properly

const names = ['rahul', 'neha', 'amit'];

const formattedNames = names.map(name =>
  name[0].toUpperCase() + name.slice(1)
);

answer : ["Rahul", "Neha", "Amit"]


6. Apply 10% discount

Real life: Shopping sale

const prices = [500, 1000, 1500];

function applyDiscount(price) {
  return price - price * 0.10;
}

const discounted = prices.map(applyDiscount);
answer : [450, 900, 1350]



7. Add bonus points to scores based on condition

Real life: Game scoring system

const scores = [45, 60, 85];

const finalScores = scores.map(score => {
  if (score >= 80) return score + 20;
  if (score >= 50) return score + 10;
  return score;
});
answer : Rules:

≥80 → +20

≥50 → +10

Output:

[45, 70, 105]


8. Convert temperatures with formula

Real life: Weather app

const celsius = [0, 20, 30];

function toFahrenheit(temp) {
  return (temp * 9/5) + 32;
}

const fahrenheit = celsius.map(toFahrenheit);
answer : Formula:
 (C × 9/5) + 32

Output:

[32, 68, 86]


9. Generate table of numbers

Real life: Math learning app

const numbers = [1, 2, 3, 4];

const tableOfTwo = numbers.map(num => num * 2);
answer :  [2, 4, 6, 8]



10. Combine map with string formatting

Real life: SMS notification system

const balances = [500, 1200, 300];

const messages = balances.map(balance =>
  `Your balance is ₹${balance}`
);

 answer :  [
"Your balance is ₹500",
"Your balance is ₹1200",
"Your balance is ₹300"
]

_____________________________________________________________________________________________________________



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

___________________________________________________________________________________
//  1. Total money in wallet
const money = [100, 200, 50];
const totalMoney = money.reduce((sum, amount) => sum + amount, 0);


//  Answer: 350

Explanation:

sum = total money

amount = current value
 બધા numbers add થાય → 100 + 200 + 50 = 350

//  2. Total steps walked in a week
const steps = [3000, 5000, 4000, 6000];
const weeklySteps = steps.reduce((total, step) => total + step, 0);


//  Answer: 18000

Explanation:
 બધા steps add થાય →
3000 + 5000 + 4000 + 6000 = 18000 steps

//  3. Find total cart price
const prices = [499, 299, 199];
const totalPrice = prices.reduce((total, price) => total + price, 0);


// Answer: 997

Explanation:
 Shopping total →
499 + 299 + 199 = 997

// 4. Find maximum score
const marks = [45, 88, 67, 92];
const highest = marks.reduce((max, mark) => {
  return mark > max ? mark : max;
}, marks[0]);


//  Answer: 92

Explanation:
 Highest number શોધે છે

45 vs 88 → 88

88 vs 67 → 88

88 vs 92 → 92

// 5. Count total characters
const words = ['Hi', 'Hello', 'JS'];
const totalChars = words.reduce((count, word) => count + word.length, 0);


 Answer: 9

Explanation:
Letters count થાય

Hi = 2

Hello = 5

JS = 2

 Total = 9 characters

 6. Combine words into sentence
const words = ['Learning', 'JavaScript', 'is', 'fun'];
const sentence = words.reduce((text, word) => text + ' ' + word);


 Answer:

"Learning JavaScript is fun"


Explanation:
 Words જોડાઈ sentence બને છે.

 7. Count passed students
const marks = [35, 72, 88, 40, 25];
const passCount = marks.reduce((count, mark) => {
  return mark >= 40 ? count + 1 : count;
}, 0);


 Answer: 3

Explanation:
 Pass ≥ 40
72, 88, 40 → 3 students pass

 8. Calculate final balance
const transactions = [1000, -200, -300, 500];
const finalBalance = transactions.reduce((balance, amount) => balance + amount, 0);


 Answer: 1000

Explanation:
Deposit positive, withdraw negative
1000 − 200 − 300 + 500 = 1000 balance

10. Build comma-separated string
const items = ['Pen', 'Book', 'Pencil'];
const result = items.reduce((text, item) => text + ', ' + item);


Answer:

"Pen, Book, Pencil"

______________________________________________________________________________________

 JavaScript Filter → Map → Reduce Practice

---

Q1 Grocery Store – Total Cost


const prices0 = [50, 120, 300, 80, 200];
const totalCost = prices0
  .filter(p => p > 100)
  .map(p => p * 1.05)
  .reduce((a,b)=>a+b,0);
console.log("Q1:", totalCost);


Output:** 651
Explanation:**
Prices >100 → [120, 300, 200]
Add 5% tax → [126, 315, 210]
Total = 651



Q2 Fitness Calories

js
const minutes = [10, 25, 40, 15, 60];
const calories = minutes
  .filter(m=>m>=20)
  .map(m=>m*4)
  .reduce((a,b)=>a+b,0);
console.log("Q2:", calories);
```

**Output:** 500
**Explanation:**
Minutes ≥20 → [25, 40, 60]
Calories ×4 → [100, 160, 240]
Total = 500

---

## Q3 Passed Marks

```js
const marks0 = [35,55,80,20,45];
const passedTotal = marks0
  .filter(m=>m>=40)
  .reduce((a,b)=>a+b,0);
console.log("Q3:", passedTotal);
```

Output:** 180
Explanation:**
Marks ≥40 → [55, 80, 45]
Total = 180

---

 Q4 Bank Credits

js
const transactions0 = [500,-200,1000,-300,700];
const credits0 = transactions0
  .filter(t=>t>0)
  .reduce((a,b)=>a+b,0);
console.log("Q4:", credits0);
```

**Output:** 2200
**Explanation:**
Positive values → [500, 1000, 700]
Total = 2200

---

## Q5 Discount Bill

```js
const prices6 = [800,1500,3000,600,1200];
const discountBill = prices6
  .filter(p=>p>1000)
  .map(p=>p*0.85)
  .reduce((a,b)=>a+b,0);
console.log("Q5:", discountBill);
```

Output:** 4845
Explanation:**
Prices >1000 → [1500, 3000, 1200]
15% discount → [1275, 2550, 1020]
Total = 4845

---
Q6 Attendance Points

js
const hours1 = [5,7,8,6,9];
const points = hours1
  .filter(h=>h>=7)
  .map(h=>h*10)
  .reduce((a,b)=>a+b,0);
console.log("Q6:", points);
```

**Output:** 240
**Explanation:**
Hours ≥7 → [7, 8, 9]
×10 → [70, 80, 90]
Total = 240

---

## Q7 Delivery Distance

```js
const distances = [3,6,10,4,8];
const totalDistance = distances
  .filter(d=>d>5)
  .map(d=>d+1)
  .reduce((a,b)=>a+b,0);
console.log("Q7:", totalDistance);
```

Output:** 27
Explanation:**
Distance >5 → [6, 10, 8]
Bonus +1 km → [7, 11, 9]
Total = 27

---

Q8 Salary System

js
const salaries = [18000,25000,30000,15000];
const payout = salaries
  .filter(s=>s>20000)
  .map(s=>s+2000)
  .reduce((a,b)=>a+b,0);
console.log("Q8:", payout);
```

**Output:** 59000
**Explanation:**

> 20000 → [25000, 30000]
> +2000 → [27000, 32000]
> Total = 59000

---

## Q9 Study Time

```js
const hours2 = [0.5,1.5,2,0.75,3];
const studyMinutes = hours2
  .filter(h=>h>1)
  .map(h=>h*60)
  .reduce((a,b)=>a+b,0);
console.log("Q9:", studyMinutes);
```

Output:** 390 minutes
Explanation:**

> 1 hour → [1.5, 2, 3]
> ×60 → [90, 120, 180]
> Total = 390

---

Q10 Electricity Bill
js
const units = [80,120,200,90,150];
const bill = units
  .filter(u=>u>100)
  .map(u=>u*6)
  .reduce((a,b)=>a+b,0);
console.log("Q10:", bill);
```

**Output:** 2820
**Explanation:**
Units >100 → [120, 200, 150]
×6 → [720, 1200, 900]
Total = 2820

---

## Q11 Game Score

```js
const scores4 = [30,50,90,20,70];
const powerScore = scores4
  .filter(s=>s>40)
  .map(s=>s*2)
  .reduce((a,b)=>a+b,0);
console.log("Q11:", powerScore);
```

**Output:** 420
**Explanation:**

> 40 → [50, 90, 70]
> Double → [100, 180, 140]
> Total = 420

---

## Q12 Travel Fare

js
const rides = [5,12,20,8,15];
const fare = rides
  .filter(r=>r>10)
  .map(r=>r+50)
  .reduce((a,b)=>a+b,0);
console.log("Q12:", fare);
```

**Output:** 197
**Explanation:**

> 10 km → [12, 20, 15]
> +50 → [62, 70, 65]
> Total = 197

---

## Q13 Productive Hours

```js
const hours3 = [4,6,8,5,9];
const productiveMinutes = hours3
  .filter(h=>h>=6)
  .map(h=>h*60)
  .reduce((a,b)=>a+b,0);
console.log("Q13:", productiveMinutes);
```

**Output:** 1380 minutes
**Explanation:**
≥6 → [6, 8, 9]
×60 → [360, 480, 540]
Total = 1380

---

## Q14 Reward Coins

js
const purchases = [300,800,1200,400];
const coins = purchases
  .filter(p=>p>500)
  .map(()=>10)
  .reduce((a,b)=>a+b,0);
console.log("Q14:", coins);
```

**Output:** 20 coins
**Explanation:**

> 500 → [800, 1200]
> 10 each → [10, 10]
> Total = 20

---

## Q15 Fuel Cost

```js
const liters = [3,6,10,4,8];
const fuelCost = liters
  .filter(l=>l>5)
  .map(l=>l*105)
  .reduce((a,b)=>a+b,0);
console.log("Q15:", fuelCost);
```

**Output:** 2520
**Explanation:**

> 5 L → [6, 10, 8]
> ×105 → [630, 1050, 840]
> Total = 2520

---

## Q16 Sum of Cubes

js
const numbers1 = [1,2,3,4,5];
const cubeSum = numbers1
  .filter(n=>n%2!==0)
  .map(n=>n**3)
  .reduce((a,b)=>a+b,0);
console.log("Q16:", cubeSum);
```

**Output:** 153
**Explanation:**
Odd numbers → [1, 3, 5]
Cubes → [1, 27, 125]
Total = 153

---

## Q17 Bonus Points

```js
const scores2 = [10,20,30,40,50];
const avg = scores2.reduce((a,b)=>a+b,0)/scores2.length;
const bonusScore = scores2
  .filter(s=>s>avg)
  .map(s=>s+5)
  .reduce((a,b)=>a+b,0);
console.log("Q17:", bonusScore);
```

**Output:** 100
**Explanation:**
Average = 30
Above avg → [40, 50]
+5 → [45, 55]
Total = 100

---

## Q18 Subscription Bill

js
const plans = [199,399,599,299];
const finalBill = plans
  .filter(p=>p>300)
  .map(p=>p*1.18)
  .reduce((a,b)=>a+b,0);
console.log("Q18:", finalBill);
```

**Output:** 1177.64
**Explanation:**

> 300 → [399, 599]
> +18% tax → [470.82, 706.82]
> Total = 1177.64

---

## Q19 Achievement Score

```js
const scores3 = [45,60,70,30,80];
const achievement = scores3
  .filter(s=>s>=60)
  .map(s=>s*s)
  .reduce((a,b)=>a+b,0);
console.log("Q19:", achievement);
```

**Output:** 14900
**Explanation:**
≥60 → [60, 70, 80]
Square → [3600, 4900, 6400]
Total = 14900

---

## Q20 Interview Finisher


const numbers2 = [3,6,9,10,12];
const finalSum = numbers2
  .filter(n=>n%3===0)
  .map(n=>n*10)
  .reduce((a,b)=>a+b,0);
console.log("Q20:", finalSum);
```

**Output:** 300
**Explanation:**
Divisible by 3 → [3, 6, 9, 12]
×10 → [30, 60, 90, 120]
Total = 300
