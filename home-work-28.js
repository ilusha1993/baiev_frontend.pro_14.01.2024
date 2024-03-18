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