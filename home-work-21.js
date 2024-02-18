'use strict';

const image = document.querySelector('#image');
const next = document.querySelector('#btnNext');
const prev = document.querySelector('#btnPrev');
let count = 1;
document.querySelector('#btnNext').addEventListener('click', () => {
    if (count < 9) {
        image.src = `./images/${count + 1}.jpg`;
        count += 1;
        next.style.visibility = 'visible';
        prev.style.visibility = 'visible';
    }

    if (count === 9) {
        next.style.visibility = 'hidden';
    }
})

document.querySelector('#btnPrev').addEventListener('click', () => {
    if (count > 1) {
        image.src = `./images/${count - 1}.jpg`;
        count -= 1;
         next.style.visibility = 'visible';
    }    prev.style.visibility = 'visible';

    if (count === 1) {
        prev.style.visibility = 'hidden';
    }
})