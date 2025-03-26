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
// document.addEventListener('DOMContentLoaded', () => {
//     const sliderTrack = document.querySelector('.slider-track');
    
//     sliderTrack.addEventListener('animationiteration', () => {
//         sliderTrack.style.animation = 'none';
//         void sliderTrack.offsetWidth;
//         sliderTrack.style.animation = 'slide 10s linear infinite';
//     });
// });

// Sliding Window
document.addEventListener('DOMContentLoaded', () => {
    const sliderTrack = document.querySelector('.slider-track');
    const images = sliderTrack.querySelectorAll('img');
    const totalImages = images.length;
    const imageWidth = images[0].clientWidth + 20; // Including margin-right
    let currentIndex = 0;
    let animationTimeout;

    // Set initial state
    sliderTrack.style.animation = 'none';
    sliderTrack.style.transform = 'translateX(0)';

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalImages;
        const translateValue = -currentIndex * imageWidth;
        
        // Apply transition
        sliderTrack.style.transition = 'transform 0.5s linear';
        sliderTrack.style.transform = `translateX(${translateValue}px)`;

        // Reset position after full cycle (when last image reaches end)
        if(currentIndex === totalImages - 1) {
            setTimeout(() => {
                sliderTrack.style.transition = 'none';
                sliderTrack.style.transform = 'translateX(0)';
                void sliderTrack.offsetWidth; // Trigger reflow
            }, 2000);
        }
    }

    // Start the slider after initial 2 seconds
    setTimeout(() => {
        nextSlide();
        animationTimeout = setInterval(nextSlide, 2000);
    }, 2000);

    // Pause on hover
    sliderTrack.addEventListener('mouseenter', () => {
        clearInterval(animationTimeout);
        sliderTrack.style.transition = 'none';
    });

    sliderTrack.addEventListener('mouseleave', () => {
        animationTimeout = setInterval(nextSlide, 2000);
    });
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

document.querySelector('.all-clubs').addEventListener('click', () => {
    window.location.href = "allClubs.html";
});

document.querySelector('.future-event').addEventListener('click', () => {
    window.location.href = "events.html";
});

document.querySelector('.join').addEventListener('click', () => {
    window.location.href = "recruitments.html";
});

// Club card click
document.querySelector('.cards1').addEventListener('click', () => {
    window.location.href = "aces.html";
});

// Event card click
document.querySelector('.cards2').addEventListener('click', () => {
    window.location.href = "pastEvents.html";
});