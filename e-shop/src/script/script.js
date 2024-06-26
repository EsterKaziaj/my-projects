// /src/script/script.js
document.getElementById('search-input').addEventListener('input', search);

function toggleMenu() {
    const menu = document.querySelector('.menu');
    const navBar = document.querySelector('.nav-bar');

    menu.classList.toggle('show');
    navBar.classList.toggle('show');
}


// search bar function
function search() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const cards = document.querySelectorAll('.grid-card, .row-card');
    
    cards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        if (title.includes(query)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// popup function 
function showPopup(button) {
    const card = button.closest('.grid-card, .row-card');
    const title = card.querySelector('h2').innerText;
    const imageSrc = card.querySelector('img').src;
    const description = card.querySelector('p') ? card.querySelector('p').innerText : '';
    
    const popupBody = document.getElementById('popup-body');
    popupBody.innerHTML = `
        <h2>${title}</h2>
        <img src="${imageSrc}" alt="${title}" style="width: 100%; border-radius: 5px;">
        <p>${description}</p>
    `;
    
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}


// carousel function 
document.addEventListener('DOMContentLoaded', () => {
    const carouselSlide = document.querySelector('.carousel-slide');
    const items = [
        { src: '/src/img/pencopper.jpg', price: '$449.99', description: 'Rook Quill Rotary Tattoo Machine — Copper' },
        { src: '/src/img/penblue.jpg', price: '$449.99', description: 'Rook Quill Rotary Tattoo Machine — Blue' },
        { src: '/src/img/pen3.jpg', price: '$1,199.99', description: 'Pre-Order — Inkjecta Flite X1 Wireless Tattoo Machine' },
        { src: '/src/img/pen3.jpg', price: '$1,199.99', description: 'Pre-Order — Inkjecta Flite X1 Wireless Tattoo Machine' },
        { src: '/src/img/pen3.jpg', price: '$1,199.99', description: 'Pre-Order — Inkjecta Flite X1 Wireless Tattoo Machine' }
    ];

    // Append initial items
    items.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('carousel-item');
        div.innerHTML = `<img src="${item.src}" alt="${item.description}"><p>${item.price}</p><p>${item.description}</p>`;
        carouselSlide.appendChild(div);

        // Create dots
        const dot = document.createElement('span');
        dot.classList.add('carousel-dot');
        if (index === 0) dot.classList.add('active');
        document.querySelector('.carousel-dots').appendChild(dot);
    });

    // Clone first and last items
    const firstClone = carouselSlide.children[0].cloneNode(true);
    const lastClone = carouselSlide.children[carouselSlide.children.length - 1].cloneNode(true);
    
    carouselSlide.appendChild(firstClone);
    carouselSlide.insertBefore(lastClone, carouselSlide.children[0]);

    const carouselItems = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.carousel-dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let counter = 1;
    const size = carouselItems[0].clientWidth;
    
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    const updateDots = () => {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[(counter - 1) % dots.length].classList.add('active');
    };

    const moveToNextSlide = () => {
        if (counter >= carouselItems.length - 1) return;
        carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        carouselSlide.addEventListener('transitionend', () => {
            if (carouselItems[counter].isEqualNode(firstClone)) {
                carouselSlide.style.transition = 'none';
                counter = 1;
                carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
            }
        });
        updateDots();
    };

    const moveToPrevSlide = () => {
        if (counter <= 0) return;
        carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        counter--;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        carouselSlide.addEventListener('transitionend', () => {
            if (carouselItems[counter].isEqualNode(lastClone)) {
                carouselSlide.style.transition = 'none';
                counter = carouselItems.length - 2;
                carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
            }
        });
        updateDots();
    };

    nextBtn.addEventListener('click', moveToNextSlide);
    prevBtn.addEventListener('click', moveToPrevSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            carouselSlide.style.transition = 'transform 0.4s ease-in-out';
            counter = index + 1;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
            updateDots();
        });
    });
});



 