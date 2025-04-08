console.log('Hello, world!');

// Navbar Toggle
let button = document.querySelector('.button');
let nav = document.querySelector('.nav');
let content = document.querySelector('.content');

let isCollapsed = false;

button.addEventListener('click', () => {
    isCollapsed = !isCollapsed;

    if (isCollapsed) {
        // Collapse navbar
        nav.style.width = '60px';
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.alignItems = 'center';

        document.querySelectorAll('.nav > div').forEach(div => {
            div.style.width = '50px';
            div.style.height = '50px';
            div.style.display = 'flex';
            div.style.justifyContent = 'center';
            div.style.alignItems = 'center';
            div.style.borderRadius = '10px';
        });

        // Remove text
        document.querySelectorAll('.nav div div').forEach(text => {
            text.textContent = '';
        });

        content.style.marginLeft = '61px';
        content.style.padding = '20px 120px';
        content.style.width = 'calc(100% - 61px)';
    } else {
        // Expand navbar
        nav.style.width = '250px';
        nav.style.alignItems = 'flex-start';

        document.querySelectorAll('.nav > div').forEach(div => {
            div.style.width = '220px';
            div.style.height = 'auto';
            div.style.justifyContent = 'flex-start';
        });

        // Restore text using class selectors
        document.querySelector('.home div').textContent = 'Home';
        document.querySelector('.account div').textContent = 'Account';
        document.querySelector('.all-clubs div').textContent = 'All Clubs';
        document.querySelector('.future-event div').textContent = 'Up-Coming';
        document.querySelector('.join div').textContent = 'Join Club';
        document.querySelector('.logout div').textContent = 'Logout';

        content.style.marginLeft = '251px';
        content.style.padding = '20px';
        content.style.width = 'calc(100% - 251px)';
    }
});



// Sliding Window
document.addEventListener('DOMContentLoaded', function() {
    const sliderTrack = document.querySelector('.slider-track');
    const slides = sliderTrack.children;
    const prevButton = document.querySelector('.slider-btn.left');
    const nextButton = document.querySelector('.slider-btn.right');
    
    // Clone first slide for infinite transition
    const cloneSlide = slides[0].cloneNode(true);
    sliderTrack.appendChild(cloneSlide);
    
    const slideWidth = slides[0].offsetWidth;
    let currentIndex = 0;
    let autoSlideTimeout;

    function startAutoSlide() {
        autoSlideTimeout = setTimeout(nextSlide, 3000);
    }

    function nextSlide() {
        currentIndex++;
        sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    function prevSlide() {
        if (currentIndex === 0) {
            // Jump to last real slide without transition
            sliderTrack.style.transition = 'none';
            currentIndex = slides.length - 1;
            sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
            void sliderTrack.offsetWidth; // Trigger reflow
            
            // Animate to previous slide
            sliderTrack.style.transition = 'transform 0.5s ease-in-out';
            currentIndex--;
            sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        } else {
            currentIndex--;
            sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }
    }

    sliderTrack.addEventListener('transitionend', function() {
        // Handle infinite loop for next button
        if (currentIndex === slides.length - 1) {
            sliderTrack.style.transition = 'none';
            currentIndex = 0;
            sliderTrack.style.transform = 'translateX(0)';
            void sliderTrack.offsetWidth;
            sliderTrack.style.transition = 'transform 0.5s ease-in-out';
        }
        startAutoSlide();
    });

    prevButton.addEventListener('click', function() {
        clearTimeout(autoSlideTimeout);
        prevSlide();
    });

    nextButton.addEventListener('click', function() {
        clearTimeout(autoSlideTimeout);
        nextSlide();
    });

    // Start auto-slide
    startAutoSlide();
});



// Logout button
document.querySelector('.logout').addEventListener('click', () => {
    let logout = document.createElement('div');
    logout.innerHTML = `
    <div class="logout-popup">
        <div class="logout-popup-content">
            <p>Are you sure you want to logout?</p>
            <div class="logout-popup-buttons">
                <button id="logout-yes">Yes</button>
                <button id="logout-no">No</button>
            </div>
        </div>
    </div>`;

    document.body.appendChild(logout);

    document.getElementById('logout-yes').addEventListener('click', () => {
        window.location.href = "login.html";
    });

    document.getElementById('logout-no').addEventListener('click', () => {
        document.querySelector('.logout-popup').remove();
    });
});


// Navigation event listeners (fixed using class selectors)
document.querySelector('.home').addEventListener('click', () => {
    window.location.href = "index.html";
});

// All Clubs Button
document.querySelector('.all-clubs').addEventListener('click', () => {
    window.location.href = "allClubs.html";
});

// Up-Coming Button
document.querySelector('.future-event').addEventListener('click', () => {
    window.location.href = "events.html";
});

// Join Club Button
document.querySelector('.join').addEventListener('click', () => {
    window.location.href = "recruitments.html";
});

// About Button
document.querySelector('.about').addEventListener('click', () => {
    window.location.href = "about.html";
});

// Club card click
document.querySelector('.cards1').addEventListener('click', () => {
    window.location.href = "aces.html";
});

// Event card click
document.querySelector('.cards2').addEventListener('click', () => {
    window.location.href = "pastEvents.html";
});

document.querySelector('.past-events').addEventListener('click', () => {
    window.location.href = "pastEvents.html";
});

document.querySelector('account').addEventListener('click', () => {
    window.location.href = "profile.html";
});
