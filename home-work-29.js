const birthYear = prompt('Введи твій рік народження (наприклад, 2001):');
const residenceCity = prompt('Введіть твоє місто проживання:');
const favoriteSport = prompt('Введіть твій улюблений вид спорту:');

let message = ''; // Повідомлення, яке будемо показувати
let invalideValues = [];

    let age;
    let ageInfo;
    if (birthYear !== null && birthYear.trim() !== ''){
        const currentYear = new Date().getFullYear();
        age = currentYear - parseInt(birthYear);
        ageInfo = `В цьому році тобі - ${age} років.`;
    } else {
        invalideValues.push(' свій рік народження');
    }

    // Перевіряємо місце проживання
    let residenceInfo = '';
    if (residenceCity !== null && residenceCity.trim()){
        switch (residenceCity.toUpperCase()) {
            case 'КИЇВ':
                residenceInfo = 'Ти живеш у столиці України!';
                break;
            case 'ЛОНДОН':
                residenceInfo = 'Ти живеш у столиці Великобританії!';
                break;
            case 'ВАШИНГТОН':
                residenceInfo = 'Ти живеш у столиці Сполучених Штатів Америки!';
                break;
            default:
                residenceInfo = `Ти живеш у місті ${residenceCity.toUpperCase()}.`;
        }
    } else {
        invalideValues.push(' своє місце проживання');
    }

    // Перевіряємо улюблений вид спорту
    let sportInfo = '';
    if (favoriteSport !== null && favoriteSport.trim() !== ''){
        switch (favoriteSport.toUpperCase()) {
            case 'ФУТБОЛ':
                sportInfo = 'Твій улюблений вид спорту - Футбол. Круто! Хочеш стати як Мессі?';
                break;
            case 'ТЕНІС':
                sportInfo = 'Твій улюблений вид спорту - Теніс. Круто! Хочеш стати як Світоліна?';
                break;
            case 'БОКС':
                sportInfo = 'Твій улюблений вид спорту - Бокс. Круто! Хочеш стати як Усик?';
                break;
            default:
                sportInfo = `Твій улюблений вид спорту - ${favoriteSport}.`;
        }
    } else {
        invalideValues.push(' свій улюблений вид спорту');
    }

    if (invalideValues.length === 0) {
        // Формуємо повідомлення
        message = `${ageInfo}\n${residenceInfo}\n${sportInfo}`;
        alert(message);
    } else {
        alert(`Шкода, що ти не захотів ввести: ${invalideValues}`);
    }
