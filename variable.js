//var temp,let,const line by line comparision
//var is store the value parmenatly
//and not define like any value without variable

var a = "temp";
var _123 = "Hello";
var $123 = "Hello";
const temp_const = "hii snehal here ..";


//declare and initialize

var d;  // declare d
var temp_d = "hyyy"  // intialize value like hyyy

// variable add value to window

var name = "snehal";  // this is add into window
let name1 =  "harshita"; // let is not add into window menas let direct inserted value

//reassigned and redeclaration

var temp = 23;
temp = "num";  // reassigned
var temp = "text"; //redeclare

 // let temp_1 = 22;
 // var temp_1 = 22; // we can not redeclare let variable

 const temp_a = "name";
 //temp_a = "sneha"; // const can not reassigned/redecalre value

 //scope(global,block,function)

 var e = 23;
 console.log("globalscope" + e);
 {
   var e = 22;
   console.log("block scope" + e);

 }
 function abc()
 {
    var e = 23;
    console.log("function scope" + e);
 }
 abc();
 console.log("outside" + e);

 // let-------------------------------------------------- 

 let s = 23;
 console.log("globalscope let variable "+ s);
 {
   let s = 32;
   console.log("block scope let variable" + s);

 }
function abc()
 {
    let s = 20;
    console.log("function scope let variable" + s);

 }
 abc();
 console.log("outside let variable" + s);
 //diiferent is let using global variable print for outside
 //var used block to outside


 // Temporal Dead Zone (TDZ)
console.log(h);
var h = 24;

// console.log(g);
//console.log(j);
//let j = 12;

//Hoisting Imapact
// Hoisting --> when your create a vaiable into js that break
// into two part first is declare part that go to up and there
// initialization part that go down
var temp_d = 12;
// var temp_d; --> undefined; --> that go to up
// temp_d = 12; --> that go down (means stuck into line 66)
// if you use console.log before initialization that give you undefined 


//example 1

//console.log(nm);
//let nm = "name";

//example 2
var b = "username";
console.log(b);

//var b = "username";

//example 3

var x = 1;
{
    var x = 2;
}
console.log(x);


//example 4

let hs = 10;
{
    let hs = 20;
    console.log("Inside:", hs);
}
console.log("Outside:", hs);

//example 5

const person = { name: "snehal thummar" };
console.log(person)
person.name = "snehal thummar"; 
//person = {};           