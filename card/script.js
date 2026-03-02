// 1. select First
// 2. show form and close form
// 3. form - validation, submit, reset
// 4. store into localstorage
// 5. createElement and show data
// 6. show all data into HTML
// 7. create UP and down btn

let add = document.querySelector("#add-note");
let container = document.querySelector(".form-container");
let closeBtn = document.querySelector(".closeForm");
let form = document.querySelector("form")

let img = document.querySelector("input[placeholder ='https://example.com/photo.jpg']");
let uname = document.querySelector("input[placeholder='Enter full name']");
let home = document.querySelector('input[placeholder="Enter home town"]');
let purpose = document.querySelector('input[placeholder="e.g., Quick appointment note"]');
let category = document.querySelectorAll('input[name="category"]');

// open form --> add new card
add.addEventListener("click", () => {
    container.style.display = "block";
});

// close form
closeBtn.addEventListener("click", () => {
    container.style.display = "none";
});
let data = JSON.parse(localStorage.getItem("data"))

// save into localstorage
function SaveToStorage(obj) {
    // save new data
    let data = JSON.parse(localStorage.getItem('data')) || [];
    data.push(obj);
    localStorage.setItem("data", JSON.stringify(data));

    // get old data
    let olddata = localStorage.getItem("data");
    data = JSON.parse(olddata);
    data.push(obj);
    console.log("old data", JSON.parse(olddata));

}


// form validation/sumbit/reset
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let imgUrl = img.value.trim();
    let fullname = uname.value.trim();
    let town = home.value.trim();
    let task = purpose.value.trim();

    let selected = false;
    category.forEach((cat) => {
        if (cat.checked) {
            selected = cat.value;
        }
    });


    if (imgUrl === "") {
        alert(" please Enter Image URL")
        return;
    }

    if (fullname === "") {
        alert(" please Enter fullname")
        return;
    }

    if (town === "") {
        alert(" please Enter Home Town")
        return;
    }

    if (task === "") {
        alert(" please Enter purpose")
        return;
    }

    if (!selected) {
        alert(" please Select Category")
        return;
    }

    SaveToStorage({
        imgUrl,
        fullname,
        town,
        task,
        selected
    })
    container.style.display = "none";
    form.reset();
    ShowCards();
});

// show card
let stack = document.querySelector(".stack");

function ShowCards() {
    stack.innerHTML = "";
    let allData = JSON.parse(localStorage.getItem("data"));



    allData.forEach((data) => {
        console.log(allData);
        // card container
        let card = document.createElement("div");
        card.classList.add("card");

        // image
        let img = document.createElement("img");
        img.classList.add("avatar");
        img.setAttribute("src", data.imgUrl);

        // name
        let h2 = document.createElement("h2");
        h2.textContent = data.fullname;

        // home town
        let homeInfo = document.createElement("div");
        homeInfo.classList.add("info");

        // span tag
        let home = document.createElement("span");
        home.textContent = "Home Town"
        let town = document.createElement("span");
        town.textContent = data.town;


        // purpose
        let purpose = document.createElement("div");
        purpose.classList.add("info");

        // span tages- purpose
        let head_note = document.createElement("span");
        head_note.textContent = "purpose";
        let note = document.createElement("span");
        note.textContent = data.task;

        // buttons
        let btnDiv = document.createElement("div");
        btnDiv.classList.add("buttons");


        // buttoms-- button div
        let call = document.createElement("button");
        call.classList.add("call");
        
        // call.textContent = "Call";
        call.innerHTML = `<i class="ri-phone-line"></i> Call`;
        let msg = document.createElement("button");
        msg.classList.add("msg");
        msg.innerHTML = `<i class="ri-message-line"></i> Message`;

        // add to html
        stack.appendChild(card);
        card.appendChild(img);
        card.appendChild(h2);
        card.appendChild(homeInfo);
        homeInfo.appendChild(home);
        homeInfo.appendChild(town);
        card.appendChild(purpose);
        purpose.appendChild(head_note);
        purpose.appendChild(note);
        card.appendChild(btnDiv);
        btnDiv.appendChild(call);
        btnDiv.appendChild(msg);


    })

    console.log(stack)

}

ShowCards();

// up btn and down btn
let upBtn = document.querySelector("#upBtn");
let downBtn = document.querySelector("#downBtn");

upBtn.addEventListener("click", () => {
    console.log(stack.lastChild);
    lastChild = stack.lastElementChild;

    if (lastChild) {
        stack.insertBefore(lastChild, stack.firstElementChild);
        // insertBefore(element, element)
    }
});

downBtn.addEventListener("click", () => {
    console.log(stack.firstElementChild);
    firstChild = stack.firstElementChild;

    if (firstChild) {
        stack.append(firstChild, stack.firstElementChild);
        // insertBefore(element, element)
    }

});
