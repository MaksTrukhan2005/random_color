"use strict"

const body = document.querySelector('body');
body.addEventListener("click", function() {
    const colors = ['white', 'blue', 'purple', 'aqua', 'azure'];
    const randomIndex = Math.floor( Math.random() * colors.length );
    const randomColor = colors[randomIndex];
    body.style.backgroundColor = randomColor
});