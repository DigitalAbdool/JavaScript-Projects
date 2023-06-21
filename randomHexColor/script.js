let button = document.querySelector(".btn");
let hexColor = document.querySelector(".result");

button.addEventListener('click', () =>{
    let color =
    Math.random().toString(16).substring(2, 8);
    color= "#" + color;
    document.body.style.backgroundColor = color;
});