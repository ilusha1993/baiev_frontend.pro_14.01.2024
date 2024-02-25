const emojiWrapper = document.getElementById('wrapper');
const emojiList = document.getElementById('emojiList');
const countList = document.getElementById('countList');
let emojis = [
    {  emoji: '🍎', count: 0},
    {  emoji: '🍞', count: 0},
    {  emoji: '🥔', count: 0},
    {  emoji: '🥒', count: 0},
    {  emoji: '🍋', count: 0},];

// Функція оновлення та зберігання результатів в localStorage
function updateCounter(i) {
    emojis[i].count++;
    localStorage.setItem('emojis', JSON.stringify(emojis));
}

function showResults(){

    emojis.forEach((emojiData, index) => {
        const emojiDiv = document.createElement('emojiDiv');
        emojiDiv.textContent = emojiData.emoji;
        emojiDiv.classList.add('emoji');
        emojiList.classList.add('emojiList');
        emojiList.appendChild(emojiDiv);

        const countDiv = document.createElement('countDiv');
        countDiv.textContent = emojiData.count;
        countDiv.classList.add('count');
        countList.classList.add('countList');
        countList.appendChild(countDiv);

        emojiDiv.addEventListener('click', () => {
            updateCounter(index);
            countDiv.textContent = emojiData.count;
        })
    })
}

// Перевірка чи є збереженні дані в localStorage
const storedEmojis = localStorage.getItem('emojis');
if (storedEmojis) {
    emojis = JSON.parse(storedEmojis);
}

//Кнопка очищення localStorage
const clearStorage = document.getElementById('clearButton');
clearStorage.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
})

showResults();
