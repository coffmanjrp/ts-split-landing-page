"use strict";
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var container = document.querySelector('.container');
left.addEventListener('mouseenter', function () {
    container.classList.add('hover-left');
});
right.addEventListener('mouseenter', function () {
    container.classList.add('hover-right');
});
left.addEventListener('mouseleave', function () {
    container.classList.remove('hover-left');
});
right.addEventListener('mouseleave', function () {
    container.classList.remove('hover-right');
});
