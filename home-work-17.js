console.log('1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).');
let result1 = '';
for (let i = 20; i <= 30; i += 0.5) {
    result1 += i + ' '
}
console.log(result1);
console.log(' ');
console.log('2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.');
const dollar = 27;
for (let i = 10; i <= 100; i += 10){
    console.log(`${i} $ = ${i * dollar} грн`)
}
console.log(' ');
console.log('3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.');
let result3 = '';
let wholeNumber = parseFloat(prompt('Задача3. Введіть ціле число: (Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує цього числа)'));
if (isNaN(wholeNumber)){
    console.log('Операція неможлива. Потрібно ввести ціле число');
} else{
    for (let i = 1; (i * i) <= wholeNumber && i <= 100; i++){
        result3 += i + ' ';
    }
}
console.log(result3);
console.log(' ');
console.log('4. Дане ціле число. З\'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).');
const userInput4 = parseFloat(prompt('Задача 4. Введіть число: (чи є воно простим?)'));
function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

if (isPrime(userInput4)){
    console.log(userInput4 + " є простим числом");
} else {
    console.log(userInput4 + " не є простим числом");
}
console.log(' ');
console.log('5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).');
const userInput5 = parseFloat(prompt('Задача 5. Введіть число: (чи можна одержати це число шляхом зведення числа 3 у деякий ступінь?)'));
function isRight(number) {
    if (number <= 0) {
        console.log('Число від\'ємне або нуль неможливо отримати шляхом зведення 3 у будь-який ступінь.')
        return false;
    }
    while (number % 3 === 0) {
        number /= 3;
    }

    return number === 1;
}
if (isRight(userInput5)){
    console.log(userInput5 + " - можна");
} else {
    console.log(userInput5 + " - не можна");
}



