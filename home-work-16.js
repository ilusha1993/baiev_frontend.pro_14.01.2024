const input = document.querySelector('#input16');
input.style.marginTop = '30px';
input.style.width = '300px';

const div = document.querySelector('#div16');
div.style.marginTop = '30px';
div.style.width = '310px';
div.style.height = '30px';
div.style.backgroundColor = 'green';
div.style.display = 'none';


document.querySelector('#input16').addEventListener('focus', () => {
    div.style.display = 'block';

});

document.querySelector('#input16').addEventListener('blur', () => {
    div.style.display = 'none';

});