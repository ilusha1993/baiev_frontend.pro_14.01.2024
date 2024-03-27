const categoriesContainer = document.getElementById('categories');
const productsContainer = document.getElementById('products');
const productInfoContainer = document.getElementById('product-info');
const container = document.getElementById('container');

const title = document.getElementById('title');

//Мої замовлення
const myOrdersBloc = document.getElementById('myOrdersBloc');
const myOrdersIcon = document.getElementById('myOrdersIcon');

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

// Викликаємо функцію завантаження замовлень при завантаженні сторінки
function loadOrdersFromLocalStorage() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    console.log(orders);
    myOrdersBloc.innerHTML = '';

    // Перевіряємо, чи є замовлення у localStorage і відображаємо їх у "Мої замовлення"
    if (orders && orders.length > 0) {
        orders.forEach(order => {
            const completedOrder = `
                <div class="completedOrder">
                    <button id="removeOrder">X</button>
                    <img class="orderImage" src="./img/${order.productImg}" alt="Product photo">
                    <p class="orderDate">${order.orderDateTime}</p>
                    <p class="orderName"><strong>${order.productName}</strong></p>
                    <p class="orderPrice"><strong>${order.productPrice} $</strong></p>
               </div>`

            // const completedOrder = `
            //     <div class="productPurchased">${orders.productName} - $ ${order.productPrice}</div>
            //     <img class="productImage" src="./img/${order.productImg}" alt="Product photo">
            //     <p><strong>ПІБ покупця:</strong> ${order.fullName}</p>
            //     <p><strong>Місто:</strong> ${order.city}</p>
            //     <p><strong>Склад Нової пошти:</strong> ${order.novaPoshtaBranch}</p>
            //     <p><strong>Метод оплати:</strong> ${order.paymentMethod}</p>
            //     <p><strong>Кількість продукції:</strong> ${order.quantity}</p>
            //     <p><strong>Коментар:</strong> ${order.comment}</p>
            //
            // `;


            const orderElement = document.createElement('div');
            orderElement.classList.add('order');
            orderElement.innerHTML = completedOrder;
            myOrdersBloc.appendChild(orderElement);
        });
    }
}

loadOrdersFromLocalStorage();

//Функція відправки заповненої форми
function submitOrderForm() {
    const fullName = document.getElementById('fullName').value.trim();
    const city = document.getElementById('city').value;
    const novaPoshtaBranch = document.getElementById('novaPoshtaBranch').value.trim();
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
    const quantity = document.getElementById('quantity').value.trim();
    const comment = document.getElementById('comment').value.trim();

    // Отримання поточної дати та часу
    const currentDateTime = new Date();
    const orderDateTime = currentDateTime.toLocaleString('en-US');

    //Перевірка заповнення полів
    if (fullName === '' || city === '' || novaPoshtaBranch === '' || !paymentMethod || quantity === '') {
        alert('Будь ласка, заповніть всі обов\'язкові поля форми.');
        return false;
    }

    // Формуємо об'єкт замовлення
    const order = {
        productName: productName,
        productImg: productImg,
        orderDateTime: orderDateTime,
        productPrice: productPrice,
        fullName: fullName,
        city: city,
        novaPoshtaBranch: novaPoshtaBranch,
        paymentMethod: paymentMethod.value === 'cashOnDelivery' ? 'Післяплата' : 'Оплата банківською карткою',
        quantity: quantity,
        comment: comment
    };


    //Формуємо повідомлення про замовлення
    const orderInfo = `
        <div class="productPurchased">${productName} - $ ${productPrice}</div>
        <img class="productImage" src="./img/${productImg}" alt="Product photo">
        <p><strong>Дата та час замовлення:</strong> ${orderDateTime}</p>
        <p><strong>ПІБ покупця:</strong> ${fullName}</p>
        <p><strong>Місто:</strong> ${city}</p>
        <p><strong>Склад Нової пошти:</strong> ${novaPoshtaBranch}</p>
        <p><strong>Метод оплати:</strong> ${paymentMethod.value === 'cashOnDelivery' ? 'Післяплата' : 'Оплата банківською карткою'}</p>
        <p><strong>Кількість продукції:</strong> ${quantity}</p>
        <p><strong>Коментар:</strong> ${comment}</p>
        <button id="closeInvoice" onclick="invoiceCloseFuntion()">Х</button>
    `

    // Отримуємо збережені замовлення з localStorage або створюємо новий масив
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order); // Додаємо нове замовлення до масиву

    // Зберігаємо оновлений масив у localStorage
    localStorage.setItem('orders', JSON.stringify(orders));

    closeFormFunction(); //закриття форми заповнення замовлення

    //Відображаємо повідомлення про замовлення
    invoice.innerHTML = `
        <h3>Ваше замовлення сформоване!</h3>
        <h4>Ви можете знайти його в "Мої замовлення"</h4>
        ${orderInfo}
    `
    invoice.style.display = 'flex'; //відображаємо, бо за замовченням "display: none;"

    loadOrdersFromLocalStorage();

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

//Кнопка переходу в "Мої замовлення" та зміна стилю
let myOrdersStatus = 'off';
myOrdersIcon.addEventListener('click', () => {
    if(myOrdersStatus === 'off') {
        container.style.display = 'none';
        myOrdersBloc.style.display = 'flex';
        myOrdersBloc.style.border = '1px solid lightslategray';
        myOrdersStatus = 'on';
        myOrdersIcon.innerHTML = `<i class="fa-solid fa-rotate-left myOrdersIcon"></i><p>На головну сторінку</p>`
        myOrdersIcon.style.color = 'lightslategray';
        title.innerHTML = `Мої замовлення`;
        title.style.color = 'lightslategray';
        title.style.border = '1px solid lightslategray'
    } else {
        container.style.display = 'flex';
        myOrdersBloc.style.display = 'none';
        myOrdersBloc.style.border = '1px solid goldenrod';
        myOrdersStatus = 'off';
        myOrdersIcon.innerHTML = `<i class="fa-solid fa-cart-shopping myOrdersIcon"></i><p>Мої замовлення</p>`
        myOrdersIcon.style.color = 'goldenrod';
        title.innerHTML = `Оберіть товари`;
        title.style.color = 'goldenrod';
        title.style.border = '1px solid goldenrod'
    }
})

