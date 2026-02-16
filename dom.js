// dom -- document object model
// all website code ---> DOM
// website output ---> DOM
// DOM -- HTML body

// DOM tree structure:
// node ---> Element (ex. h1, p, b, i), text (ex,lorem), comment
// select element from html
// change text
// change html
// change css
// change attribute
// event listeners

// select element
// GetElementById
let a = document.getElementById("abc")
console.log(a);

// getElementByClassName
let b = document.getElementsByClassName("abc")
console.log(b);

// getElementsByTagName
let c = document.getElementsByTagName("h1")
console.log(c);

// querySelector --> only select first (tag , class)in html
let d = document.querySelector(".abc");

// queryselectorAll --> select All
let e = document.querySelectorAll("h1")
console.log(e)

// change text
// innertext
d.innerText = "change text with Js";

// outerHTML
// d.outertext = "<h1>change text with outertext</h1>";

// innerHTML
d.innerHTML = "<i> change text with Js</i>";

// outerHTML
// d.outertext = "<i> change text style with Js </i>";

// textContent -- use for change text
d.textContent = "change text with textContent";

// outer vs inner
// innerText -- show text between tag -- ignore tag
// outerText -- shoe text between tag -- remove tag

// innerHTML -- show text between too tag -- not tag
// outerHTML -- show text with tag

// -------------------------------------------
// Attribute manipulation
// getAttribute, setAttribute, removeAttribute
let link = document.querySelector('a')
console.log(link)
console.log("get attribute", link.href) // -- give value of href attribute

// link.href = "https://www.google.com/"
// element.setAttribute ("attribute_name", "change")
link.setAttribute("href" , "www.google.com")
let info = link.getAttribute("href");
console.log("get Attribute", info) // -- give value of href attribute

// element.removeAttribute("name")
link.removeAttribute("href")

// ------------------------------------
// dynamic DOM manipulation
// createElement, appendChild, removeChild, prepend

// createElement
let box = document.createElement("div")
box.textContent = "this is div tag create using Js"
console.log(box)

// append / prepend -- add element into HTML
// append -- add element into last
// document.body.append(box);
// prepend -- add element into first
document.body.prepend(box);

// remove
d.remove();

// appendchild
let outer_box = document.createElement("div");
outer_box.classList.add("outer");
document.body.append(outer_box);

let inner_box = document.createElement("div");
inner_box.classList.add("inner");
outer_box.appendChild(inner_box);


// append vs appendChild
// remove vs removeChil

// -----------------------------------------------
// style updates via .style and classlist (add, remove, toggle)
console.dir(d);
d.style.backgroundcolor = "green";
d.style.color = "white";
d.style.padding = "20px";

// classlist
let card = document.querySelector(".card");
// console.dir(card)
card.classList.remove("card-style")

// remove
card.classList.remove("card")

// toggle -- class --> available --> remove it
//           class --> not available --> add it
card.classList.toggle("card")


