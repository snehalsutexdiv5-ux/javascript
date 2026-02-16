// Event events page par koi pan action karo tene ek event rise karshe, page par click, hover, typing all are
// Event Listener event nu reaction give reaction when click, dbclick, hover, typing
// Add Event Listener
// select -> event function what you change
// element.addEventListener("event_name", function(){})
// Common Events: click, input, change, submit, mouseover, keyup
// Click event (dark and light mode)
let btn = document.querySelector(".btn");
btn.addEventListener("click", ()=>{

if (btn.textContent == "Dark Mode") {
    btn.textContent = "Light Mode"
    document.body.style.backgroundColor = "black";
}
 else{
    btn.textContent = "Dark Mode"
    document.body.style.backgroundColor = "white";
}
})
//ex-2
let btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", ()=>{
alert("button clicked");
})
//color change of div tag

let btncolor = document.querySelector(".btn2");
let box = document.querySelector(".color-card");   // ✔ correct class

btncolor.addEventListener("click", () => {

    if (btncolor.textContent == "Color Change") {
        btncolor.textContent = "Color Change1";
        box.style.backgroundColor = "yellow";
        box.style.borderColor="Red";
       
    } 
    else {
        btncolor.textContent = "Color Change";
        box.style.backgroundColor = "Red";
        box.style.borderColor="Yellow";
    }

});

// input
// how to know which is typed?
let inp = document.querySelector("input");

inp.addEventListener("input", (dets) => {
    // console.log(dets);
    if (dets.data !== null) {
        console.log(dets.data);
    }
});

// change -- when you chagne elements state
let sel = document.querySelector("select");

sel.addEventListener("change", (dets) => {
    console.log(dets.target.value);
    document.body.style.backgroundColor = dets.target.value;
});

let up_btn = document.querySelector(".upload");
let cs_btn = document.querySelector("#btn1");

cs_btn.addEventListener("click", () => {
    up_btn.click();
    // cs_btn.textContent = 
});

up_btn.addEventListener("change", (dets) => {
    console.log(dets);
    console.log(dets.target.files[0].name);
    cs_btn.textContent = dets.target.files[0].name;
});


// input
// how to know which is typed ?
let inp = document.querySelector("input");

inp.addEventListener("input", (dets) => {
    // console.log(dets);
    if (dets.data !== null) {
        console.log(dets.data);
    }
});

// change -- when you chagne elements state
let sel = document.querySelector(".select");
let mobile = document.querySelector("i")

sel.addEventListener("change", (dets)=>{
    console.log(dets);
    console.log(dets.target.value);
    mobile.textContent = dets.target.value;
})