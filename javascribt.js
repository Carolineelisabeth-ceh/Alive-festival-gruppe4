const buttons = document.querySelectorAll(".see-more");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        const accordion = button.parentElement;
        const content = accordion.querySelector(".extra-content");

        content.classList.toggle("show");

    });
});