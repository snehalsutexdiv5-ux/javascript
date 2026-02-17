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
let from = document.querySelector("form");
form.addEventListener("sumbit", () => {
    document.body.style.backgroundColor = "red";
})

// mousemove and mouseout
let box2 = document.querySelector(".box2");

box2.addEventListener("mousemove", () => {
    box2.style.backgroundColor = "skyblue";
    box2.style.width = "300px";
});

box2.addEventListener("mouseout", () => {
    box2.style.backgroundColor = "darkgreen";
    box2.style.width = "100px";
});

// mouse move --effect
