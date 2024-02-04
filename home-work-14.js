// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями
function makeSum() {
    let total = 0;

    function addNumber (x) {
        total += x;
        console.log(total);
    }

    return addNumber;
}

const sum = makeSum ();

sum(3);
sum(5);
sum(20);

