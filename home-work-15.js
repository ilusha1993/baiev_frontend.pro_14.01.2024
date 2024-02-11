console.log('1. Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.')

const firstArray = [0, 'zero', 1, 'one', 2, 'two', 3, 'three', 4, 'four'];
const average = function (){
    let sum1 = 0;
    let amount1 = 0;
    for (let i = 0; i < firstArray.length; i++){
        if (typeof firstArray[i] === 'number' && !isNaN(firstArray[i])){
            sum1 += firstArray[i];
            amount1++;
        }
    }
    console.log(`Середнє арифметичне чисел масиву: ${sum1 / amount1}`);
}

average();
console.log(' ');

console.log('2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.')

function doMath(x, znak, y){
    let result2;
    let x2 = parseFloat(prompt("Введіть перше число x:"));
    let znak2 = prompt("Введіть математичну операцію (+, -, *, /, %, ^):");
    let y2 = parseFloat(prompt("Введіть друге число y:"));

    switch (znak2){
        case '+':
            result2 = x2 + y2;
            break;

        case '-':
            result2 = x2 - y2;
            break;

        case '*':
            result2 = x2 * y2;
            break;

        case '/':
            result2 = x2 / y2;
            break;

        case '%':
            result2 = x2 % y2;
            break;

        case '^':
            result2 = Math.pow(x2, y2);
            break;

        default:
            result2 = "Невірний знак";
    }

    switch (true){
        case (isNaN(x2) || isNaN(y2) || result2 === "Невірний знак"):
            console.log('Математична операція неможлива, так як дані введені неправильно');
            break;

        case (y2 === 0 && znak2 === '/'):
            console.log('Математична операція неможлива, так як на нуль ділити заборонено!');
            break;

        default:
            console.log(`${x2} ${znak2} ${y2} = ${result2}`);
    }
}

doMath();
console.log(' ');
console.log('3. Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.')
function createArray(){
    let bigArray = [];
    let bigArrayLength = parseInt(prompt(`Введіть довжину основного масиву:`));
    for (let i = 0; i < bigArrayLength; i++){
        let smallArray = [];
        let smallArrayLength = parseInt(prompt(`Введіть довжину внутрішнього масиву для елемента ${i+1}:`));
        for (let j = 0; j < smallArrayLength; j++){
            let value = prompt(`Введіть значення для елемента ${i+1}-${j+1}`);
            smallArray.push(value);
        }
        bigArray.push(smallArray);
    }
    return bigArray;
}

let array3 = createArray();
console.log(array3);
console.log(' ');
console.log('4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. \'func(" hello world", [\'l\', \'d\'])\' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.')
let inputString = prompt("Введіть рядок:");
let charactersToRemove = prompt("Введіть через кому символи, які потрібно видалити:").split(',');
function removeCharacters(inputString, charactersToRemove) {
    for (let character of charactersToRemove) {
        inputString = inputString.split(character).join('');
    }
    return inputString;
}

let result4 = removeCharacters(inputString, charactersToRemove);
console.log('Вихідний рядок: ' + result4);
