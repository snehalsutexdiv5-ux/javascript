// event - page par koy pan action kato tene ek event rise karshe, page par click , hover, typing all are events
// event listener - event nu reaction -- give rteaction when click, dbclick, hover, typing

// add event listener
// select --> event --> function --> what you change
// element.addEventListener("event_name", function(){})



// =====================================================
// common Events : click, input, change, submit, mouseover, keyup
// Click
let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    document.body.classList.toggle("cs-body");
    console.log(btn.textContent)
    if (btn.textContent === "Dark Mode") {
        btn.textContent = "Light Mode"
    } else {
        btn.textContent = "Dark Mode"
    }
});


let box = document.querySelector(".box");
let btn1 = document.querySelector(".btn1");
let span = document.querySelector("span");

btn1.addEventListener("click", () => {
    box.classList.toggle("red");

    if (span.textContent === "Red") {
        span.textContent = "White";
    } else {
        span.textContent = "Red";
    }
});

// input
// how to know which is type ?
let inp = document.querySelector(".text");
inp.addEventListener("input", (dets) => {
    console.log(dets);
    if (dets.data !== null) {
        console.log(dets.data);
        inp.style.background = "red"
        inp.style.width = "200px"
        inp.style.color = "white"
    }

});

// change -- when you change elements state
let sel = document.querySelector(".sel");
let device = document.querySelector(".device");

sel.addEventListener("change", (dets) => {
    console.log(dets.target.value);
    device.textContent = dets.target.value;
});


// change event => change div color and border color with color input
let box1 = document.querySelector(".outer_box");
let inp1 = document.querySelector(".color_inp");
let inp2 = document.querySelector(".boder_inp");


inp1.addEventListener("change", (dets)=>{
  box1.style.backgroundColor = dets.target.value;
});
  inp2.addEventListener("change", (dets)=>{
  box1.style.borderColor = dets.target.value;
});

// submit
let form = document.querySelector("form");

form.addEventListener("sumbit", () => {
    document.body.style.backgroundColor = "red";
})

// mousemove and mouseout
let box2 = document.querySelector(".box2");

box2.addEventListener("mousemove", () => {
     box2.style.width ="500px";
})
box2.addEventListener("mouseout", () => {
     box2.style.width ="100px";
})


// keyup-self
let keyup = document.querySelector(".keyup")

keyup.addEventListener("keyup" ,() =>{
    document.body.style.backgroundColor = " rgb(221, 167, 179)";
})

// =================================
// event object;
// sel.addEventListner("change", (dets) =>{
// console.log(dets); => dets --> that called event object
// });

// target, type, preventDefault
// target --> that show element
// type --> show event type
// prevebtDefault --> use for html-form --> prevent form to refresh and clean details

// ============================
// 