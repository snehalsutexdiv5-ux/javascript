// setTimeout, cleartimeout

// setTime ---> run only one time
// timeout -- in ms
setTimeout(() => {
    console.log("hello");
}, 2000);

// setInterval, ClearInterval
// setInterval ---> run into loop(infinte times)
let timmer = setInterval(() => {
    console.log("hi, set interval");
}, 2000);


//counter

let number = 0;
let num_counter = setInterval (() => {
    if (number <=10) {
        console.log(number);
    }
},1000);


// popup window
let button = document.querySelector("button");
let card = document.querySelector(".card");
setTimeout(() => {
    card.style.display = "block";
}, 2000);

button.addEventListener("click", () => {
  card.style.display = "none";
});

// Real use: deplaying UI actions, auto-refresh

// Downloading card
let dcount = 0;
let bar = document.querySelector(".progress-bar");
let percent = document.querySelector(".percent")
let h2 = document.querySelector("h2")

let download = setInterval(() => {
    if (dcount <= 99) {
         console.log(dcount);
        dcount++;
        bar.style.width = `${dcount}%` 
        percent.textContent = dcount + "%";
    } else{
        h2.textContent = "downloaded"
        clearInterval(download);
    }
},10);



//setTimeout vs setInterval