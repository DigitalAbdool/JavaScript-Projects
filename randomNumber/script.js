const randomNumber = document.querySelector(".number");
const button = document.querySelector(".btn");


button.addEventListener('click', () =>{
    randomNumber.innerHTML = Math.trunc(Math.random() * 101)
})