const categoriesContainer = document.getElementById('categories');
const productsContainer = document.getElementById('products');
const productInfoContainer = document.getElementById('product-info');
const purchaseInfo = document.getElementById('purchaseInfo');
const closeWrapper = document.getElementById('closeWrapper');


const products = {
    'Електроніка': [
        {name: 'Ноутбук', price: 500},
        {name: 'Смартфон', price: 1000}],
    'Одяг': [
        {name: 'Футболка', price: 100},
        {name: 'Джинси', price: 200}],
    'Книжки': [
        {name:  'JavaScript for Beginners', price: 50},
        {name: 'CSS Mastery', price: 40}]
};

function showCategories() {
    Object.keys(products).forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.textContent = category;
        categoryElement.classList.add('category');
        categoryElement.addEventListener('click', () => showProducts(category));
        categoriesContainer.appendChild(categoryElement);
    })
}

function showProducts(category) {
    productsContainer.innerHTML = '';
    products[category].forEach(product => {
        const productElement = document.createElement('div');
        productElement.textContent = product.name;
        productElement.classList.add('product');
        productElement.addEventListener('click', () => displayProductInfo(product));
        productsContainer.appendChild(productElement);
    })
}

function displayProductInfo(product) {
    productInfoContainer.innerHTML = `
    <div class="buyContainer">
        <h2 class="priceTitle">${product.name}</h2>
        <p class="priceValue">Ціна: $${product.price}</p>
        <button id="buyButton">Купити</button>
    </div>`;
    const buyButton = document.getElementById('buyButton');
    buyButton.addEventListener('click', () => {
        buyProduct();
    })
}

function buyProduct() {
    purchaseInfo.style.display = 'flex';
    closeWrapper.classList.add('closeWrapperActive')
    productInfoContainer.innerHTML = '';
    productsContainer.innerHTML = '';
}

showCategories();

function openOrderForm() {
    purchaseInfo.innerHTML = '';
}

function closeOrderForm() {
    purchaseInfo.style.display = 'none';
    closeWrapper.classList.remove('closeWrapperActive')

}

const closeForm = document.getElementById('closeForm');
closeForm.addEventListener('click', () => {
    closeOrderForm()
})

function closeAll (){
    closeOrderForm();
    // openOrderForm();
    submitOrderForm();
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
        <button id="closeForm" onclick="closeAll ()">Х</button>
    `;


    purchaseInfo.innerHTML = `
        <h3>Інформація про замовлення:</h3>
        ${orderInfo}
    `;

    return true;
}

const finalBuy = document.getElementById('finalBuy');
finalBuy.addEventListener('click', () => {
    submitOrderForm();
})