let userHours = prompt('Введіть кількість годин:');
let hours = parseInt(userHours);
switch (true) {
    case(userHours === null):
        alert('Як забажаєте...');
        break;
    case(isNaN(hours) || hours <= 0):
        alert('Введена некоректна кількість годин');
        break;
    default:
        let seconds = hours * 3600;
        alert(`${hours} годин = ${seconds} секунд`);
}