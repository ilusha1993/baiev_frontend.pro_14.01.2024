let firstNumber = +prompt('Введіть перше число');
let secondNumber = +prompt('Введіть друге число');

if(secondNumber === 0){
    alert(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}\n
${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}\n
${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}\n
Ділення на ноль не дозволяється!`);
}

else
alert(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}\n
${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}\n
${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}\n
${firstNumber} / ${secondNumber} = ${firstNumber/secondNumber}`);