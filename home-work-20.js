'use strict';

const myImage = document.querySelector('#myImg');
document.querySelector('#myBut').addEventListener('click', () => {
    myImage.src = `./images/${Math.floor(Math.random() * 9) + 1}.jpg`;
})




