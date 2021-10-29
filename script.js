'use strict';

let inputText = document.querySelector('#text');
let inputRange = document.querySelector('#range');
let firstButton = document.querySelector('#btn');
let secondButton = document.querySelector('#e_btn');
let square = document.querySelector('#square');
let circle = document.querySelector('#circle');

const colorer = function () {
    square.style.backgroundColor = inputText.value;
};

const sizer = function (event) {
    circle.style.height = event.target.value + '%';
    circle.style.width = event.target.value + '%';
};

firstButton.addEventListener('click', colorer);
secondButton.style.display = 'none';
inputRange.addEventListener('input', sizer);