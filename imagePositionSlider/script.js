let image = document.querySelector(".img");
let horizontal = document.querySelector(".h_input");
let vertical = document.querySelector(".v_input");


horizontal.addEventListener('input', () =>{
    image.style.left = horizontal.value + "%";
});

vertical.addEventListener('input', () =>{
    image.style.top = vertical.value + "%";
});