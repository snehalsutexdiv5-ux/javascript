// let form = document.querySelector("form");
// let inp = document.querySelectorAll("input");

// form.addEventListener("submit", (e)=>{
//     e.preventDefault(); // stop reload
//     console.log(inp[0].value);
//     console.log(inp[1].value);
//     console.log(inp[2].value);
//     console.log(inp[3].value);
//     console.log(inp[4].value);

//     // createImageBitmap


// let card = document.createElement("div");
// let dp_div = document.createElement("div");
// let img = document.createElement("img");
// let h3 = document.createElement("h3");
// let h4 = document.createElement("h4");
// let h5 = document.createElement("h5");
// let h6 = document.createElement("h6");
// console.log(card,dp_div,img,h3,h4,h5,h6);

// // add class

// card.classList.add("card");
// dp_div.classList.add("dp-img");

// // add into html
// document.body.append(card);

// // add Child
// card.appendChild(dp_div);
// dp_div.appendChild(img);
// card.appendChild(h3);
// card.appendChild(h4);
// card.appendChild(h5);
// card.appendChild(h6);

// console.log(card);


// // text content add
// img.setAttribute("src",inp[0].value);
// h3.textContent = inp[1].value ;
// h4.textContent = inp[2].value;
// h5.textContent = inp[3].value;
// h6.textContent = inp[4].value;
// /// onput clear

// inp.forEach(inp => {
//    if(inp.value !== "submit"){
//        inp.value = " ";
//    }
// });
// });

// all event and default card
 
let form = document.querySelector("form");
let inp = document.querySelectorAll("input");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // remove old card
    let oldCard = document.querySelector(".card");
    if (oldCard) {
        oldCard.remove();
    }

    // create elements
    let card = document.createElement("div");
    let dp_div = document.createElement("div");
    let img = document.createElement("img");
    let h3 = document.createElement("h3");
    let h4 = document.createElement("h4");
    let h5 = document.createElement("h5");
    let h6 = document.createElement("h6");

    card.classList.add("card");
    dp_div.classList.add("dp-img");

    document.body.append(card);
    card.append(dp_div, h3, h4, h5, h6);
    dp_div.appendChild(img);

    // ✅ default values added
    img.src = inp[0].value ||
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

    h3.textContent = inp[1].value || "Username";
    h4.textContent = inp[2].value || "Bio not provided";
    h5.textContent = inp[3].value || "example@gmail.com";
    h6.textContent = inp[4].value || "0000000000";

    // clear form
    form.reset();
});

// form.addEventListener("submit", function (e) {
//     e.preventDefault(); // stop page refresh

//     // get all input fields
//     let inputs = document.querySelectorAll("input");

//     let imageLink = inputs[0].value;
//     let name = inputs[1].value;
//     let bio = inputs[2].value;
//     let email = inputs[3].value;
//     let phone = inputs[4].value;

//     // create card div
//     let card = document.createElement("div");
//     card.classList.add("card");

//     // add content inside card
//     card.innerHTML = `
//         <img src="${imageLink}" width="100" height="100">
//         <h2>${name}</h2>
//         <p>${bio}</p>
//         <p>${email}</p>
//         <p>${phone}</p>
//     `;

//     // add card to body
//     document.body.appendChild(card);

//     // clear form after submit
//     form.reset();
// });
