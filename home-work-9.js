const array = [1, 2, 3, 4, 5, 6, 7];
console.log('Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.')
console.log(array);
function removeElement(array, element ){
    let index = array.indexOf(element);
    if (index === -1) {
        console.log('Даний масив не містить цього елементу');
    } else {
        array.splice(index, 1);
    }
}
removeElement(array, 5);
console.log(array);