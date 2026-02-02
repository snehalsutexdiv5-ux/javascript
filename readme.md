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


 