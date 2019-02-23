"use strict";
var form = document.forms.hero;
form.addEventListener("submit", makeHero, false);
document.forms.hero.powers[0].checked = true;

form.name.addEventListener("blur", validateInline, false);
function validateInline(event) {
    // get the fist letter of the name input field
    var firstLetter = form.name.value[0];
    // get a reference to the label for the name input field
    var label = document.querySelector("label[for='name']");
    if (firstLetter.toUpperCase() === "X") {
        label.classList.add("error");
        label.textContent = "Your name is not allowed to start with X!";
    } else { // the error hasn't happened or has been fixed
        label.classList.remove("error");
        label.textContent = "Name:";
    }
}

form.addEventListener("submit", validate, false);
function validate(event) {
    var firstLetter = form.name.value[0];
    if (firstLetter.toUpperCase() === "X") {
        event.preventDefault();
        alert("Your name is not allowed to start with X!");
    }
}

function makeHero(event) {
    event.preventDefault();

    var hero = {};
    hero.name = form.name.value;
    hero.password = form.passwordInput.value;
    hero.city = form.city.value;

    hero.powers = [];
    for (i = 0; i < form.powers.length; i++) {
        if (form.powers[i].checked) {
            hero.powers.push(form.powers[i].value);
        }
    }

    for (i=0 ; i < form.type.length ; i++) {
        if (form.type[i].checked) {
            hero.type = form.type[i].value;
            break;
        }
    }
    alert(JSON.stringify(hero));
}

/*
var square = document.getElementById("square");
var angle = 0;
function rotate() {
    angle = (angle + 5) % 360
    square.style.transform = "rotate(" + angle + "deg)"
    window.requestAnimationFrame(rotate);
}
id = window.requestAnimationFrame(rotate);
*/