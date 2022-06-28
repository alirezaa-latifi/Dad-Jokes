"use strict";
console.log("connected");

// DOM Els
const jokeEl = document.querySelector(".joke-box__joke");
const nextJokeBtn = document.querySelector(".joke-box__btn");

nextJokeBtn.addEventListener("click", generateJoke);
generateJoke();
// Approach 1 (Promise)
function generateJoke() {
    this?.blur();
    fetch("https://icanhazdadjoke.com/", {
        headers: {
            accept: "text/plain",
        },
    })
        .then((response) => response.text())
        .then((data) => (jokeEl.textContent = data));
}

// Approach 2 (Async/Await)
/*
async function generateJoke() {
    this.blur();
    const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            accept: "text/plain",
        },
    });

    const jokeText = await response.text();
    jokeEl.textContent = jokeText;
}
*/
