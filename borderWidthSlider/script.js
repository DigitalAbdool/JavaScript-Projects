let input = document.querySelector(".slider");
let result = document.querySelector(".border");


input.addEventListener('input', () =>{
    result.style.borderWidth = input.value + "px";
})