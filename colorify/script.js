let outPut = document.querySelector(".border");
let red = document.querySelector(".btn_red");
let green = document.querySelector(".btn_green");
let blue = document.querySelector(".btn_blue");


red.addEventListener("click", () => {
    outPut.style.backgroundColor = "#ff0000";
})

green.addEventListener("click", () =>{
    outPut.style.backgroundColor = "green";
})

blue.addEventListener("click", () =>{
    outPut.style.backgroundColor = "blue";
})