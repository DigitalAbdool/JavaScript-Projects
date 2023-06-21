let openModal = document.querySelector(".open_modal");
let closeModal = document.querySelector(".close_modal");
let modalContent = document.querySelector(".modal_content");
let blurBg = document.querySelector(".hidden_blur")




openModal.addEventListener("click", () => {
    modalContent.classList.remove("hidden_modal");

    
})

closeModal.addEventListener("click", () =>{
    modalContent.classList.add("hidden_modal");
})