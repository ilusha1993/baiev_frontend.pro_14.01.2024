'use strict';
console.log('Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація): ')
const string1 = prompt('Введіть першу довільну строку: ');
const string2 = prompt('Введіть другу довільну строку: ');
const string3 = prompt('Введіть третю довільну строку: ');
console.log('Результат: ' + string1 + string2 + string3);
console.log(' ');

console.log('Розбити за цифрами п\'ятизначне число і вивести у вихідному порядку через пробіл.: ');
let defaultNumber = 12345;
let result2 = '';
for (let i = 5; i > 0; i--){
    result2 += Math.floor(defaultNumber / Math.pow(10, (i - 1))) + ' ';
    defaultNumber %= Math.pow(10, (i - 1));
}
console.log(result2);