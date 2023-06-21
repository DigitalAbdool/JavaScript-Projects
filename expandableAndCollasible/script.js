let cards = document.querySelectorAll('.card');


for(let i = 0; i , cards.length; i++){
    cards[i].addEventListener("click", () =>{
        removeActiveClass();
        cards[i].classList.add("active");
    })

    function removeActiveClass() {
        for (let i = 0; i < cards.length; i++){
            cards[i].classList.remove("active")
        }
    }
}