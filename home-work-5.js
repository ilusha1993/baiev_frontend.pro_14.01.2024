let mathOperation = prompt('Оберіть математичну операцію та введіть відповідну назву: add - додавання, sub - віднімання, mult - множення, div - ділення');
let firstNumber = +prompt('Введіть перше число');
let secondNumber = +prompt('Введіть друге число');

switch (mathOperation) {
    case 'add':
        console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
        break;
    case 'sub':
        console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
        break;
    case 'mult':
        console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
        break;
    case 'div':
        if (secondNumber === 0) {
            console.log('Ділення на нуль не дозволяється');
        }
        else {
            console.log(`${firstNumber} / ${secondNumber} = ${firstNumber/secondNumber}`);
        }
        break;
    default :
        console.log('Математичну операцію не обрано.');
}