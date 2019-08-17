function actionPage() {
    // Клонирование Item
    const cards = document.querySelectorAll('.main-content .card');
    const cartContent = document.querySelector('.cart-wrapper .cart-content');
    const cartTitleInfo = document.querySelector('.cart-title_info');
    const counter = document.querySelector('.counter');
    const cartWrapper = document.querySelector('.cart-wrapper');

    cards.forEach((card) => {
        const btnAdd = card.querySelector('.btn-add');
        btnAdd.addEventListener('click', () => {
            btnAdd.style.backgroundColor  = '#2aa60c';
            const cardClone = card.cloneNode(true);
            cartContent.appendChild(cardClone);
            // Счетчик
            const cardsCart = document.querySelectorAll('.cart-content .card');
            counter.textContent = cardsCart.length;
            // Grid Css
            if (cardsCart.length != 0) {
                cartTitleInfo.remove();
                cartContent.style.display = 'grid';
                cartContent.style.gridTemplateColumns = '1fr 1fr 1fr';
                cartContent.style.gridGap = '10px';
            }
            cardsCart.forEach((card) => {
                const btnCard = card.querySelector('.btn-add');
                btnCard.textContent = 'Удалить из корзины';
                btnCard.style.backgroundColor = '#de2c2c';
                btnCard.addEventListener('click', () => {
                    card.remove();
                    totalPrice();
                    const cardsCart = document.querySelectorAll('.cart-content .card');
                    counter.textContent = cardsCart.length;
                });
            });


            totalPrice();

            function totalPrice() {
                // Общая сумма
                const cardPrice = document.querySelectorAll('.cart-content .card .card-price h5');
                const totalPrice = document.querySelector('.total-price');
                let total = 0;
                if (cardPrice.length != 0) {
                    cardPrice.forEach((card) => {
                        total += parseFloat(card.textContent);
                        totalPrice.textContent = `Общая сумма: ${total} рублей`;
                    });
                } else {
                    total = 0;
                    totalPrice.textContent = `Общая сумма: ${total} рублей`;
                    cartWrapper.appendChild(cartTitleInfo);
                }
            }

        });

    });



    // Модальное окно
    const cartLink = document.querySelector('.cart-link a'),
        cartModal = document.querySelector('.cart-modal'),
        cartClose = document.querySelector('.close-cart img');
    // Открытие
    cartLink.addEventListener('click', () => {
        cartModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    // Закрытие
    cartClose.addEventListener('click', () => {
        cartModal.style.display = 'none';
        document.body.style.overflow = '';
    });
}
actionPage();