
const products = [
    { name: 'Элегантные линзы', price: 49000, image: 'images/glasses1.jpg', description: 'Очки, которые добавляют вашему облику элегантность и утонченность. <br> Идеальны для тех, кто ценит стиль и комфорт.'},
    { name: 'Шикарные видения', price: 25550, image: 'images/glasses2.jpg', description: 'Эти очки созданы для тех, кто ищет нечто особенное. Шикарный дизайн, высококачественные материалы и превосходное видение объединены в этой модели.'},
    { name: 'Лучи стиля', price: 64999, image: 'images/glasses3.jpg', description: 'Преобразите свой облик с этими очками, придающими вашему стилю дополнительный сияющий акцент. Сочетание современного дизайна и удобства'},
    { name: 'Фэшн Фокус', price: 42500, image: 'images/glasses4.jpg', description: 'Сосредоточьтесь на моде с этой коллекцией очков. Выразите свой индивидуальный стиль и следите за последними трендами с этими модными очками.'},
    { name: 'Очки Изысканности', price: 24800, image: 'images/glasses5.jpg', description: 'Для тех, кто стремится к изысканной элегантности. Эти очки не только подчеркнут ваш утонченный вкус, но и обеспечат прекрасное зрение.'},
    { name: 'Очки гармонии', price: 50500, image: 'images/glasses6.jpg', description: 'Совершенство формы и функции. Эти очки предлагают гармоничное сочетание стиля и комфорта для тех, кто ценит качество и эстетику.'},
    { name: 'Фирменные N&A', price: 89990, image: 'images/glasses7.jpg', description: 'Эти уникальные очки от N&A - это не просто аксессуар, а часть вашего индивидуального стиля. Вдохновленные трендами, созданные для вас.'},
    { name: 'Очки иллюзии', price: 25000, image: 'images/glasses8.jpg', description: 'Погрузитесь в великолепие дизайна и комфорта с этими очками. Удивительное сочетание стиля и функциональности для вашего взгляда'},
    { name: 'Великолепие Взгляда', price: 32500, image: 'images/glasses9.jpg', description: 'Играйте с восприятием с этой коллекцией очков. Создайте иллюзии и выделитесь из толпы с этим захватывающим дизайном.'},
    { name: 'Очки Эклектики', price: 45650, image: 'images/glasses10.jpg', description: 'Для тех, кто ценит разнообразие и индивидуальность. Эклектичный дизайн этих очков добавит неповторимый характер к вашему облику.'},
    { name: 'Видение Вдохновения', price: 85490, image: 'images/glasses11.jpg', description: 'Обретите видение вдохновения с этими очками. Созданные для тех, кто стремится к новым горизонтам стиля и инноваций.'},
    { name: 'Звездные Линзы', price: 32490, image: 'images/glasses12.jpg', description: 'Очки, которые созданы для звезд и звездочек. Очаровательный дизайн и высокая функциональность для тех, кто привык быть в центре внимания.'}
];

const productsSection = document.getElementById('products');

products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h2>${product.name}</h2>
        <p>${product.price} тенге.</p>
        <details class="product-details">
            <summary>Показать описание</summary>
            <p>${product.description}</p>
        </details>`;
    productsSection.appendChild(productCard);
});

const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.1)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});

function SwitchBackground(ArticleBackground) {
    display = document.getElementById('ArticleBackground').style.display;
    if (display == "none") {
        document.getElementById('ArticleBackground').style.display = "block";
    }
    else {
        document.getElementById('ArticleBackground').style.display = "none";
    }
}
function SwitchArticle1Full (Article1Content, ArticleBackground) {
    SwitchArticle1(Article1Content);
    SwitchBackground(ArticleBackground)
}
function SwitchArticle1(Article1Content) {
    display = document.getElementById('Article1Content').style.display;
    if (display === "none") {
        document.getElementById('Article1Content').style.display = "block";
    }
    else {
        document.getElementById('Article1Content').style.display = "none";
    }
}
function SwitchArticle2Full (Article2Content, ArticleBackground) {
    SwitchArticle2(Article2Content);
    SwitchBackground(ArticleBackground)
}
function SwitchArticle2(_Article2Content) {
    display = document.getElementById('Article2Content').style.display;
    if (display == "none") {
        document.getElementById('Article2Content').style.display = "block";
    }
    else {
        document.getElementById('Article2Content').style.display = "none";
    }
}
function SwitchArticle3Full (Article3Content, ArticleBackground) {
    SwitchArticle3(Article3Content);
    SwitchBackground(ArticleBackground)
}
function SwitchArticle3(_Article3Content) {
    display = document.getElementById('Article3Content').style.display;
    if (display == "none") {
        document.getElementById('Article3Content').style.display = "block";
    }
    else {
        document.getElementById('Article3Content').style.display = "none";
    }
}
document.addEventListener('keydown', function(event) {
    const discountMessage = document.getElementById('discountMessage');

    if (event.key === 'd' && event.ctrlKey) {
        discountMessage.style.display = 'block';
        setTimeout(function() {
            discountMessage.style.display = 'none';
        }, 3000);
    }
});





