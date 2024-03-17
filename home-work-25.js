const categoriesContainer = document.getElementById('categories');
const productsContainer = document.getElementById('products');
const productInfoContainer = document.getElementById('product-info');
const purchaseInfo = document.getElementById('purchaseInfo');

const categories = ['Електроніка', 'Одяг', 'Книжки'];

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

function displayCategories() {
    categories.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.textContent = category;
        categoryElement.classList.add('category');
        categoryElement.addEventListener('click', () => displayProducts(category));
        categoriesContainer.appendChild(categoryElement);
    });
}

function displayProducts(category) {
    productsContainer.innerHTML = '';
    products[category].forEach(product => {
        const productElement = document.createElement('div');
        productElement.textContent = product.name;
        productElement.classList.add('product');
        productElement.addEventListener('click', () => displayProductInfo(product));
        productsContainer.appendChild(productElement);
    });
}

function displayProductInfo(product) {
    productInfoContainer.innerHTML = `
    <h2>${product.name}</h2>
    <p>Ціна: $${product.price}</p>
    <button class="buy-btn" onclick="buyProduct()">Купити</button>
  `;
}

function buyProduct() {
    // alert('Product purchased!');
    purchaseInfo.style.display = 'flex';
    productInfoContainer.innerHTML = '';
    productsContainer.innerHTML = '';
}

displayCategories();
