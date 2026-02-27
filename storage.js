// localstorage API: setItem, getItem, removeItem 
// localstorage --> save that data into browser's storage, after close browse data wasn't deleted
// (browser nu aevu storage k jema data store thy che and browser band thy jay to pan data delete thato nathi)
// ~ 5 MB storage

// setItem
// localStorage.setItem("key",value)
localStorage.setItem("name","test_user");

 
//getItem
// localStorage.getItem("key_name")
let user = localStorage.getItem("name"); 

// removeItem
// localStorage.removeItem("name");

// updateItem IT
localStorage.setItem("name", "Demo User");

// sessionStorage API
// session Storage --> save that for temporarily time when you close tab delete was deleted
// (aa storage data ne temporarily time save kari ne rake che,jyare pan tab close karsho tyre teni sthe data pan delete thy jay che)
// ~5Mb storage

// setItem
sessionStorage.setItem("email", "test@test.com");

// getItem
let email = sessionStorage.getItem("email");

// removeItem
// sessionStorage.removeItem("email");

// // update
sessionStorage.setItem("email", "user@user.com");
sessionStorage.setItem("name", "user");
sessionStorage.setItem("age", "10");
sessionStorage.setItem("cart", "");

// //clear 
// sessionStorage.clear();


// basic cookie structure  (manual key = value;)
// cookie ---> store data into browser cookie 
// (cookie data ne browser na cookies name ni property ma save kare che, cookie no use light data save karva mate thy che)
// when you reload web page data will be automatically send to server
// ~ 4 KB storage
document.cookie =  "email = demo@gmail.com";

// max age
document.cookie = "user = demo; max-age = 10" // 10 sec


let btn = document.querySelector("button");
let body = document.querySelector("body");

// localstoragre --> value-> classList.add(theme)
 if (localStorage.getItem("theme") == "dark" ) {
body.className = "";
console.log("theme Changes");
body.classList.add(localStorage.getItem("theme"));
btn.textContent = "Light Mode";
btn.style.color = "#222";
btn.style.backgroundColor = "#555";
localStorage.setItem("theme", "dark");

 }
 
btn.addEventListener("click", () => {
  console.log("btn clicked");

  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
    btn.textContent = "Light Mode";
    btn.style.color = "#222";
    btn.style.backgroundColor = "#555";
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");

    btn.textContent = "Dark Mode";
    btn.style.color = "rgb(29, 29, 29)";
    btn.style.backgroundColor = "white";

    localStorage.setItem("theme", "light");
  }
});