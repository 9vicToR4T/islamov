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


    //     let myArr = [];
    //     myArr["Anna"] = false;
    //     myArr["Bob"] = false;
    //     myArr["Cole"] = false;


    //     for(var i in myArr)
    // {
    //      console.log(i + "=" + myArr[i]);
    // }
    // for (let i = 0; i <= myArr.length; i++) {
    //     while(myArr[i]<=0){
    //        console.log("a");  
    //     }


    // }

  

});