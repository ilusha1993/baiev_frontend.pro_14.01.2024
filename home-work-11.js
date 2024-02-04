// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length.
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
function generateKey (length, characters){
    let result = '';
    for (let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * (characters.length + 1));
        result += characters[randomIndex];
    }
    return result;
}

const key = generateKey(16, characters);
console.log('The received key: '+ key);
