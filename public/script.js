console.log('Hello, world!')


// Show all button ka kaam
let show1 = document.querySelector('.show1')
let show2 = document.querySelector('.show2')
let show3 = document.querySelector('.show3')
let section1 = document.querySelector('.section1')
let section2 = document.querySelector('.section2')
let section3 = document.querySelector('.section3')


show1.addEventListener('click', () => {
    if (section1.style.height != '390px') {
        section1.style.flexWrap = 'wrap';
        section1.style.height = '390px';
        section1.innerHTML = section1.innerHTML + `<div class="cards1"></div>
                    <div class="cards1"></div>
                    <div class="cards1"></div>
                    <div class="cards1"></div>
                    <div class="cards1"></div>
                    <div class="cards1"></div>`
                    
    }

    else {
        section1.innerHTML = `<div class="cards1"></div>
                    <div class="cards1"></div>
                    <div class="cards1"></div>
                    <div class="cards1"></div>
                    <div class="cards1"></div>
                    <div class="cards1"></div>`
        section1.style.height = '200px'
    }
})

show2.addEventListener('click', () => {
    if (section2.style.height != '390px') {
        section2.style.flexWrap = 'wrap';
        section2.style.height = '390px';
        section2.innerHTML = section2.innerHTML + `<div class="cards2"></div>
                    <div class="cards2"></div>
                    <div class="cards2"></div>
                    <div class="cards2"></div>
                    <div class="cards2"></div>
                    <div class="cards2"></div>`
    }

    else {
        section2.innerHTML = `<div class="cards2"></div>
                    <div class="cards2"></div>
                    <div class="cards2"></div>
                    <div class="cards2"></div>
                    <div class="cards2"></div>
                    <div class="cards2"></div>`
        section2.style.height = '200px'
    }
})

show3.addEventListener('click', () => {
    if (section3.style.height != '390px') {
        section3.style.flexWrap = 'wrap';
        section3.style.height = '390px';
        section3.innerHTML = section3.innerHTML + `<div class="cards3"></div>
                    <div class="cards3"></div>
                    <div class="cards3"></div>
                    <div class="cards3"></div>
                    <div class="cards3"></div>
                    <div class="cards3"></div>`
    }
    else {
        section3.innerHTML = `<div class="cards3"></div>
                    <div class="cards3"></div>
                    <div class="cards3"></div>
                    <div class="cards3"></div>
                    <div class="cards3"></div>
                    <div class="cards3"></div>`
        section3.style.height = '200px'
    }
})



// Navbar Toggle
let button = document.querySelector('.button');
let nav = document.querySelector('.nav');
let content = document.querySelector('.content');

button.addEventListener('click', () => {
    if (nav.style.width !== '60px') {
        // Collapse navbar instantly
        nav.style.width = '60px';
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.alignItems = 'center';

        nav.innerHTML = `<div><img src="svg/home.svg" alt=""></div>
        <div><img src="svg/account.svg" alt=""></div>
        <div><img src="svg/club.svg" alt=""></div>
        <div><img src="svg/event.svg" alt=""></div>
        <div><img src="svg/Recruitments.svg" alt=""></div>
        <div><img src="svg/logout.svg" alt=""></div>`;

        let navdiv = document.querySelectorAll('.nav div');
        navdiv.forEach(div => {
            div.style.width = '50px';
            div.style.height = '50px';
            div.style.display = 'flex';
            div.style.justifyContent = 'center';
            div.style.alignItems = 'center';
            div.style.borderRadius = '10px';
        });

        content.style.marginLeft = '61px';
        content.style.padding = '20px 120px';
        content.style.width = 'calc(100% - 61px)';
    } else {
        // Expand navbar instantly
        nav.style.width = '250px';
        nav.style.alignItems = 'flex-start';

        nav.innerHTML = `<div>
                <img src="svg/home.svg" alt="">
                <div>Home</div>
            </div>
            <div>
                <img src="svg/account.svg" alt="">
                <div>Account</div>
            </div>
            <div>
                <img src="svg/club.svg" alt="">
                <div>Clubs</div>
            </div>
            <div>
                <img src="svg/event.svg" alt="">
                <div>Future Events</div>
            </div>
            <div>
                <img src="svg/Recruitments.svg" alt="">
                <div>Recruitments</div>
            </div>
            <div>
                <img src="svg/logout.svg" alt="">
                <div>Logout</div>
            </div>
            <div>
                <div>About</div>
            </div>`;

        let navdiv = document.querySelectorAll('.nav div');
        navdiv.forEach(div => {
            div.style.width = '220px';
            div.style.height = 'auto';
            div.style.justifyContent = 'flex-start';
        });

        content.style.marginLeft = '251px';
        content.style.padding = '20px';
        content.style.width = 'calc(100% - 251px)';
    }
});



// when click on club , then open the club.html
document.getElementsByClassName('cards1')[0].addEventListener('click', () => {
    window.location.href = "clubs.html";
})


// when click on upcoming events , then open the details of events
document.getElementsByClassName('cards2')[0].addEventListener('click', () => {
    window.location.href = "events.html";
})


// when click on past events, then open the details of past events
document.getElementsByClassName('cards3')[0].addEventListener('click', () => {
    window.location.href = "pastEvents.html";
})


// Recruitments button 
document.getElementsByClassName('cards4')[0].addEventListener('click', () => {
    window.location.href = "recruitments.html";
})


// Home button Work
document.getElementsByClassName('home')[0].addEventListener('click', () => {
    window.location.href = "index.html"
})