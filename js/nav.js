window.addEventListener('DOMContentLoaded', function () {
    'use strict';
//facem menu sa apara
    let menuClick = document.querySelector('.menu');
    let addCl = document.querySelector('.nav');

    menuClick.addEventListener('click', function () {
        addCl.classList.toggle("nav_active");
    });
//facem x 
    let formX = document.querySelector('.menu__myspan');
    menuClick.addEventListener('click', function () {
            formX.classList.toggle('menu__myspan_active');
    });


    

});