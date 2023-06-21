const output = document.querySelector(".output");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");


decrease.addEventListener('click', () =>{
    output.innerHTML--;
    color();
})

reset.addEventListener('click', () =>{
    output.innerHTML = 0;
    color();
})

increase.addEventListener('click', () =>{
    output.innerHTML++;
    color();
})


function color(){
    if(output.innerHTML < 0){
        output.style.color = "#f03e3e";
    }
    else if (output.innerHTML > 0 ) {
        output.style.color = "#37b24d";
    }
    else {
        output.style.color = "#fff"
    }
    
}