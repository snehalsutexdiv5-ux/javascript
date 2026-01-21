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
 