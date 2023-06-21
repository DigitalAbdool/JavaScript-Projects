const output = document.querySelector(".output");
const result = document.querySelector(".result");
const input = document.querySelector(".slider");


input.addEventListener('input', () =>{
    result.innerHTML= input.value + "%"
    output.style.borderRadius =input.value + "%"
})