const categoriesContainer = document.getElementById('categories');
const productsContainer = document.getElementById('products');
const productInfoContainer = document.getElementById('product-info');
const purchaseInfo = document.getElementById('purchaseInfo');
const closeWrapper = document.getElementById('closeWrapper');
const invoice = document.getElementById('invoice');
let categorySelected;



const products = {
    'Електроніка': [
        {name: 'Ноутбук', price: 500},
        {name: 'Смартфон', price: 1000},
        {name: 'Консоль', price: 900}],
    'Одяг': [
        {name: 'Футболка', price: 100},
        {name: 'Джинси', price: 200},
        {name: 'Куртка', price: 300}],
    'Книжки': [
        {name:  'JavaScript for Beginners', price: 50},
        {name: 'CSS Mastery', price: 40},
        {name: 'Dictionary', price: 30}]
};

function showCategories() {
    Object.keys(products).forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.textContent = category;
        categoryElement.classList.add('category');
        categoryElement.addEventListener('click', () => {
            showProducts(category);
            categorySelected = categoryElement;
            categorySelected.style.color = 'goldenrod';
        });
        categoriesContainer.appendChild(categoryElement);
    })
}

function showProducts(category) {
    productsContainer.innerHTML = `<h2 id="productsTitle">Товари</h2>`;
    products[category].forEach(product => {
        const productElement = document.createElement('div');
        productElement.textContent = product.name;
        productElement.classList.add('product');
        productsContainer.style.backgroundColor = ' blanchedalmond';
        productElement.addEventListener('click', () => {
            displayProductInfo(product);
            productElement.style.color = 'goldenrod'
        });
        productsContainer.appendChild(productElement);
    })
}

function displayProductInfo(product) {
    productInfoContainer.innerHTML = `
    <div class="buyContainer">
        <h2 id="priceTitle">${product.name}</h2>
        <p class="priceValue">Ціна: $${product.price}</p>
        <button id="buyButton">Купити</button>
    </div>`;

    productInfoContainer.style.backgroundColor = '#f1ebeb';
    const buyButton = document.getElementById('buyButton');
    buyButton.addEventListener('click', () => {
        buyProduct();
    })
}

function buyProduct() {
    purchaseInfo.style.display = 'flex';
    closeWrapper.style.display = 'block';
    productInfoContainer.innerHTML = '';
    productsContainer.innerHTML = '';
}

showCategories();

function closeFormFunction() {
    purchaseInfo.style.display = 'none';
    productsContainer.style.backgroundColor = 'transparent';
    productInfoContainer.style.backgroundColor = 'transparent';
    productInfoContainer.innerHTML = '';
    productsContainer.innerHTML = '';
    categorySelected.style.color = '#8a96a1';
}

const closeForm = document.getElementById('closeForm');
closeForm.addEventListener('click', () => {
    closeWrapper.style.display = 'none';
    closeFormFunction()
});

function invoiceCloseFuntion() {
    invoice.style.display = 'none';
    closeWrapper.style.display = 'none';
}

function submitOrderForm() {
    const fullName = document.getElementById('fullName').value.trim();
    const city = document.getElementById('city').value;
    const novaPoshtaBranch = document.getElementById('novaPoshtaBranch').value.trim();
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
    const quantity = document.getElementById('quantity').value.trim();
    const comment = document.getElementById('comment').value.trim();


    if (fullName === '' || city === '' || novaPoshtaBranch === '' || !paymentMethod || quantity === '') {
        alert('Будь ласка, заповніть всі обов\'язкові поля форми.');
        return false;
    }

    const orderInfo = `
        <p><strong>ПІБ покупця:</strong> ${fullName}</p>
        <p><strong>Місто:</strong> ${city}</p>
        <p><strong>Склад Нової пошти:</strong> ${novaPoshtaBranch}</p>
        <p><strong>Метод оплати:</strong> ${paymentMethod.value === 'cashOnDelivery' ? 'Післяплата' : 'Оплата банківською карткою'}</p>
        <p><strong>Кількість продукції:</strong> ${quantity}</p>
        <p><strong>Коментар:</strong> ${comment}</p>
        <button id="closeInvoice" onclick="invoiceCloseFuntion()">Х</button>
    `

    invoice.innerHTML = `
        <h3>Ваше замовлення:</h3>
        ${orderInfo}
    `
    invoice.style.display = 'flex';

    closeFormFunction();

    return true;
}

const finalBuy = document.getElementById('finalBuy');
finalBuy.addEventListener('click', (event) => {
    event.preventDefault(); // Зупиняємо дії за замовчуванням (у цьому випадку, відправку форми)
    if (submitOrderForm()) {
        // Якщо submitOrderForm повертає true, то очищаємо форму
        document.getElementById('orderForm').reset();
    }
});