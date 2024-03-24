const categoriesContainer = document.getElementById('categories');
const productsContainer = document.getElementById('products');
const productInfoContainer = document.getElementById('product-info');

//Блок заповнення форми (при натисканні "КУПИТИ")
const purchaseInfo = document.getElementById('purchaseInfo');

//Шпалери затемнення (при натисканні "КУПИТИ")
const closeWrapper = document.getElementById('closeWrapper');

//Інформаційне вікно "Ваше замовлення" (після оформлення замовлення)
const invoice = document.getElementById('invoice');

//Для виділення іншим стилем обрані категорії/товари
let categorySelected = null;
let productSelected = null;

//Для копіювання даних з обраного товару на Інформаційне вікно "Ваше замовлення"
let productName;
let productPrice;
let productImg;


const products = {
    'Електроніка': [
        {name: 'Ноутбук', price: 500, img: 'electronic/1.jpeg'},
        {name: 'Смартфон', price: 1000, img: 'electronic/2.jpeg'},
        {name: 'Консоль PS 5', price: 900, img: 'electronic/3.jpeg'},
        {name: 'Airpdods', price: 300, img: 'electronic/4.jpeg'},
        {name: 'Apple watch', price: 300, img: 'electronic/5.jpeg'},
        {name: 'Консоль PS VR', price: 300, img: 'electronic/6.jpeg'}
    ],
    'Одяг': [
        {name: 'Футболка', price: 100, img: 'closes/1.jpeg'},
        {name: 'Джинси', price: 200, img: 'closes/2.jpeg'},
        {name: 'Куртка', price: 300, img: 'closes/3.jpeg'},
        {name: 'Шапка', price: 50, img: 'closes/4.jpeg'},
        {name: 'Взуття', price: 50, img: 'closes/5.jpeg'},
        {name: 'Шарф', price: 30, img: 'closes/6.jpeg'}
    ],
    'Книжки': [
        {name:  'JavaScript for Beginners', price: 50, img: 'books/1.jpeg'},
        {name: 'CSS Mastery', price: 40, img: 'books/2.jpeg'},
        {name: 'Dictionary', price: 30, img: 'books/3.jpeg'}]
};

//Функція відображення "Категорії"
function showCategories() {
    Object.keys(products).forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.textContent = category;
        categoryElement.classList.add('category');
        categoryElement.addEventListener('click', () => {
            showProducts(category);
            //Перевірка для перенесення стилю на обрану категорію (зняття з попереднього)
            if(categorySelected !== null){
                categorySelected.style.color = '#8a96a1';
            }
            categorySelected = categoryElement;
            categorySelected.style.color = 'goldenrod';
        });
        categoriesContainer.appendChild(categoryElement);
    })
}

//Функція відображення "Товари"
function showProducts(category) {
    productsContainer.innerHTML = `<h2 id="productsTitle">Товари</h2>`;
    products[category].forEach(product => {
        const productElement = document.createElement('div');
        productElement.textContent = product.name;
        productElement.classList.add('product');
        productsContainer.style.backgroundColor = ' blanchedalmond';
        productElement.addEventListener('click', () => {
            displayProductInfo(product);
            //Перевірка для перенесення стилю на обраний товар (зняття з попереднього)
            if(productSelected !== null){
                productSelected.style.color = '#8a96a1';
            }
            productSelected = productElement;
            productElement.style.color = 'goldenrod'
        });
        productsContainer.appendChild(productElement);
    })
}

//Функція відображення "Інформація про обраний товар"
function displayProductInfo(product) {
    productInfoContainer.innerHTML = `
    <div class="buyContainer">
        <h2 id="priceTitle">${product.name}</h2>
        <p class="priceValue">Ціна: $${product.price}</p>
        <img class="productImage" src="./img/${product.img}" alt="Product photo">
        <button id="buyButton">Купити</button>
    </div>`;
    //Для копіювання даних з обраного товару
    productName = product.name;
    productPrice = product.price;
    productImg = product.img;
    productInfoContainer.style.backgroundColor = '#f1ebeb';
    const buyButton = document.getElementById('buyButton');
    buyButton.addEventListener('click', () => {
        buyProduct();
    })
}

//Функція при натисканні на кнопку "Купити" в блоці "Інформація про обраний товар"
function buyProduct() {
    purchaseInfo.style.display = 'flex';  //відкриття форми заповнення замовлення
    closeWrapper.style.display = 'block'; //затемнення екрана
    productInfoContainer.innerHTML = '';  //закриття блоків "Товари" та "Інформація про обраний товар"
    productsContainer.innerHTML = '';
}

showCategories();

//Функція при натисканні на кнопку "Закрити" (закриття форми заповнення)
function closeFormFunction() {
    purchaseInfo.style.display = 'none';
    productsContainer.style.backgroundColor = 'transparent'; //прибирання стилю для блока "Товари"
    productInfoContainer.style.backgroundColor = 'transparent';//прибирання стилю для блока "Інформація про обраний товар"
    //Повертаємо всі блоки в початковий вигляд
    productInfoContainer.innerHTML = '';
    productsContainer.innerHTML = '';
    categorySelected.style.color = '#8a96a1';
}

const closeForm = document.getElementById('closeForm');
closeForm.addEventListener('click', () => {
    closeWrapper.style.display = 'none'; //прибираємо затемнення екрана
    closeFormFunction()
});

//Функція закриття "Повідомлення про замовлення"
function invoiceCloseFuntion() {
    invoice.style.display = 'none';
    closeWrapper.style.display = 'none';
}

//Функція відправки заповненої форми
function submitOrderForm() {
    const fullName = document.getElementById('fullName').value.trim();
    const city = document.getElementById('city').value;
    const novaPoshtaBranch = document.getElementById('novaPoshtaBranch').value.trim();
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
    const quantity = document.getElementById('quantity').value.trim();
    const comment = document.getElementById('comment').value.trim();

    //Перевірка заповнення полів
    if (fullName === '' || city === '' || novaPoshtaBranch === '' || !paymentMethod || quantity === '') {
        alert('Будь ласка, заповніть всі обов\'язкові поля форми.');
        return false;
    }

    //Формуємо повідомлення про замовлення
    const orderInfo = `
        <div class="productPurchased">${productName} - $ ${productPrice}</div>
        <img class="productImage" src="./img/${productImg}" alt="Product photo">
        <p><strong>ПІБ покупця:</strong> ${fullName}</p>
        <p><strong>Місто:</strong> ${city}</p>
        <p><strong>Склад Нової пошти:</strong> ${novaPoshtaBranch}</p>
        <p><strong>Метод оплати:</strong> ${paymentMethod.value === 'cashOnDelivery' ? 'Післяплата' : 'Оплата банківською карткою'}</p>
        <p><strong>Кількість продукції:</strong> ${quantity}</p>
        <p><strong>Коментар:</strong> ${comment}</p>
        <button id="closeInvoice" onclick="invoiceCloseFuntion()">Х</button>
    `

    closeFormFunction(); //закриття форми заповнення замовлення

    //Відображаємо повідомлення про замовлення
    invoice.innerHTML = `
        <h3>Ваше замовлення:</h3>
        ${orderInfo}
    `
    invoice.style.display = 'flex'; //відображаємо, бо за замовченням "display: none;"

    return true;
}

//Підтвердження замовлення при натисканні на "Оформити замовлення"
const finalBuy = document.getElementById('finalBuy');
finalBuy.addEventListener('click', (event) => {
    event.preventDefault(); // Зупиняємо дії за замовчуванням (у цьому випадку, відправку форми)
    if (submitOrderForm()) {
        // Якщо submitOrderForm повертає true, то очищаємо форму
        document.getElementById('orderForm').reset();
    }
});