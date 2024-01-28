// Дан масив
let array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// 1. Знайти суму та кількість позитивних елементів.
console.log('1. Знайти суму та кількість позитивних елементів.')

let count1 = 0;
let sum1 = 0;
array.forEach(function (item) {
    if (item > 0){
        count1++;
        sum1 += item;
    }
})

console.log(`Кількість: ${count1}`);
console.log(`Сума: ${sum1}`);
console.log('---------------------------------------------');

// 2. Знайти мінімальний елемент масиву та його порядковий номер.
console.log('2. Знайти мінімальний елемент масиву та його порядковий номер.');
let min2 = array[0];
let minIndex2 = 0;
for(let i = 0; i < array.length; i++) {
    if (array[i] < min2) {
        min2 = array[i];
        minIndex2 = i;
    }
}
console.log(`Мінімальний елемент масиву: ${min2}`);
console.log(`Порядковий номер елементу: ${minIndex2}`);
console.log('---------------------------------------------');

// 3. Знайти максимальний елемент масиву та його порядковий номер.
console.log('3. Знайти максимальний елемент масиву та його порядковий номер.');
let max3 = array[0];
let maxIndex3 = 0;
for(let i = 0; i < array.length; i++) {
    if (array[i] > max3) {
        max3 = array[i];
        maxIndex3 = i;
    }
}
console.log(`Максимальний елемент масиву: ${max3}`);
console.log(`Порядковий номер елементу: ${maxIndex3}`);
console.log('---------------------------------------------');

// 4. Визначити кількість негативних елементів.
console.log('4. Визначити кількість негативних елементів.');
let count4 = 0;
array.forEach(function (item) {
    if (item < 0){
        count4++;
    }
})
console.log(`Кількість: ${count4}`);
console.log('---------------------------------------------');

// 5. Знайти кількість непарних позитивних елементів.
console.log('5. Знайти кількість непарних позитивних елементів.');
let count5 = 0;
array.forEach(function (item) {
    if (item > 0 && item % 2 !== 0){
        count5++;
    }
})

console.log(`Кількість: ${count5}`);
console.log('---------------------------------------------');

// 6. Знайти кількість парних позитивних елементів.
// 7. Знайти суму парних позитивних елементів.
console.log('6. Знайти кількість парних позитивних елементів.');
console.log('7. Знайти суму парних позитивних елементів.')
let count6 = 0;
let sum7 = 0;
array.forEach(function (item) {
    if (item > 0 && item % 2 === 0){
        count6++;
        sum7 += item;
    }
})

console.log(`Кількість: ${count6}`);
console.log(`Сума: ${sum7}`);
console.log('---------------------------------------------');

// 8. Знайти суму непарних позитивних елементів.
console.log('8. Знайти суму непарних позитивних елементів.');
let sum8 = 0;
array.forEach(function (item) {
    if (item > 0 && item % 2 !== 0){
        sum8 += item;
    }
})

console.log(`Сума: ${sum8}`);
console.log('---------------------------------------------');

// 9. Знайти добуток позитивних елементів.
console.log('9. Знайти добуток позитивних елементів.');
let product9 = 1;
array.forEach(function (item) {
    if (item > 0){
        product9 *= item;
    }
})
console.log(`Добуток: ${product9}`);
console.log('---------------------------------------------');

// 10. Знайти найбільший серед елементів масиву, остальні обнулити.
console.log('// 10. Знайти найбільший серед елементів масиву, остальні обнулити.');
let max10 = array[0];
for (let i = 0; i < array.length; i++) {
    if (array[i] > max10) {
        max10 = array[i];
    }
}
for (let i = 0; i < array.length; i++) {
    if (array[i] !== max10) {
        array[i] = 0;
    }
}
console.log(`Найбільший елемент масиву: ${max10}`);
console.log('Масив після обнулення:');
console.log(array);