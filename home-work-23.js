'use strict'
const array = [];
const arrayLength = parseInt(prompt('Введіть довжину масиву (мінімум 4): '));

if (isNaN(arrayLength)){
    alert('Помилка! Очікується число.')
} else if (arrayLength < 4){
    alert('Помилка! Мінімальна довжина масиву має бути (4)')
} else {
    for (let i = 0; i < arrayLength; i++){
        const element = parseInt(prompt(`Введіть значення елементу масиву номер ${i+1}`))
        if (isNaN(element)){
            alert('Помилка! Даний елемент має бути числом.')
        } else {
            array.push(element);
            console.log('Початковий масив: ', array);
        }
    }

    array.sort(function(a, b) {
        return a - b;
    });
    console.log('Відсортований масив (за зростанням): ', array);
    array.splice(1, 3);
    console.log('Відсортований масив (після видалення елементів з 2 по 4): ', array);
}