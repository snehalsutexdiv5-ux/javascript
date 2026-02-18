let h1 = document.querySelector("h1");

window.addEventListener("keydown",  (dets) => {
    console.log(dets.key);
    h1.textContent="space Bar";
    if (dets.key === "") {
        h1.textContent="Space Bar";       
    } else {
        h1.textContent = dets.key;
    }
    h1.textContent= dets.key;
});

