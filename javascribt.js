// Følg guide https://www.youtube.com/watch?v=LqpF8fkKOHU med hjælp fra w3 schools.

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
const buttons = document.querySelectorAll(".see-more");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        const accordion = button.parentElement;
        const content = accordion.querySelector(".extra-content");

        content.classList.toggle("show");

    });
});
let udflugter = [
    {
        titel: "Udflugt til Thisted Bryghus",
        adresse: "Thisted Bryghus, Bryggerivej 10, 7700 Thisted",
        tidspunkt: "11:00",
        billede: "./Assets/img/Thisted bryghus.png"
    },
    {
        titel: "Surfskole",
        adresse: "Afgår fra campingpladsen",
        tidspunkt: "12-16",
        billede: "./Assets/img/Surfskole.png"
    },
    {
        titel: "Thy Whisky på Gyrup Gård",
        adresse: "Afgang: campingpladsen i Thisted",
        tidspunkt: "11:00",
        billede: "./Assets/img/Thy Whisky på Gyrup Gård.png"
    }
];

let card = document.querySelector("#udflugter");

for (let i = 0; i < udflugter.length; i++) {

    let cards = "";

    if (i === 0) {

        cards = `
        <a href="event-udflugt.html" class="card-link">
            <div class="card-music">
                <img class="card-img" src="${udflugter[i].billede}" alt="">
                <div class="Info-tekst">
                    <h2>${udflugter[i].titel}</h2>
                    <hr>
                    <h3>${udflugter[i].adresse}</h3>
                </div>
                <div class="tidspunkt">
                    <img src="Assets/img/hjerte-tomt.svg" alt="" class="favorite-btn">
                    <h4>${udflugter[i].tidspunkt}</h4>
                </div>
            </div>
        </a>
        `;
    } else {

        cards = `
        <div class="card-music">
            <img class="card-img" src="${udflugter[i].billede}" alt="">
            <div class="Info-tekst">
                <h2>${udflugter[i].titel}</h2>
                <hr>
                <h3>${udflugter[i].adresse}</h3>
            </div>
            <div class="tidspunkt">
                <img src="Assets/img/hjerte-tomt.svg" alt="" class="favorite-btn">
                <h4>${udflugter[i].tidspunkt}</h4>
            </div>
        </div>
        `;
    }

    card.innerHTML += cards;
}


