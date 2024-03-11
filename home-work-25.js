const categoriesContainer = document.getElementById('categories');
const productsContainer = document.getElementById('products');
const productInfoContainer = document.getElementById('product-info');

const categories = ['Electronics', 'Clothing', 'Books'];

const products = {
    Electronics: [
        {name: 'Laptop', price: 500},
        {name: 'Smartphone', price: 1000}],
    Clothing: [
        {name: 'T-shirt', price: 100},
        {name: 'Jeans', price: 200}],
    Books: [
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
    <p>Price: $${product.price}</p>
    <button class="buy-btn" onclick="buyProduct()">Buy</button>
  `;
}

function buyProduct() {
    alert('Product purchased!');
    productInfoContainer.innerHTML = '';
    productsContainer.innerHTML = '';
}

displayCategories();
