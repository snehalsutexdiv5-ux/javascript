let d = 20;
function abc() {
    console.log(d);
}

 function def(){
    let d = 25;
    abc();
 }
 def();

// clg ans --> 20

 function parent() {
    let a = 12;
    return function(){
        console.log(a);
    };
 }

 let func1 = parent();
 func1();

 //counter

 function counter(){
    let a = 0;
    return function (){
        a++;
        console.log(a);

    };
 }

 let fnc = counter();
 fnc(); // 1
 fnc(); // 2
 fnc();// 3
 fnc();// 4
 fnc();// 5

 let fnc2 = counter();
 fnc2(); //1
 fnc2(); //2
 fnc2(); //3
 fnc2(); //4


//  create toster

function CreateToster(config){
  let toast = document.querySelector(".toast");

    return function (noti){
      let div = document.createElement("div");
      div.className = `toaster ${config.theme === "orange" ? "bg-gray-800 text-white": 
        "bg-blue-400 text-white-500 border border-2-border-red-950"}
         px-6 py-3 inline-block top-4 right-4 rounded-md pointer-event-none`;

      toast.className += ` ${config.positionX === "left" ? "left-10" : 
        "right-10"} ${config.positionY === "bottom" ? "bottom-10" : "bottom-10"}`;
      
      div.textContent = noti;

       toast.appendChild(div);

               setTimeout(() => {
                toast.removeChild(div);
               }, config.duration * 1000);

    };
}

 
let toaster = CreateToster({
    pisitionx: "right",
    pisitionx: "bottom",
    theme: "light",
    duration: 3,
});


toaster("welcome to dashborad");
setTimeout(() => {
toaster("you have 2 new notification");
}, 2000);
setTimeout(() => {
toaster("product upload successfully");
}, 1000);

