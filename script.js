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









// Nav baar chota bada
let button = document.querySelector('.button')
let nav = document.querySelector('.nav')
let navdiv = document.querySelectorAll('.nav div')
let content = document.querySelector('.content')


button.addEventListener('click', () => {
    if (nav.style.width != '60px') {
        nav.style.width = '60px' // Change 1

        nav.innerHTML = `<div><img src="home.svg" alt=""></div>
        <div><img src="account.svg" alt=""> </div>
        <div><img src="club.svg" alt=""></div>
        <div> <img src="event.svg" alt=""></div>
        <div><img src="Recruitments.svg" alt=""></div>
        <div><img src="logout.svg" alt=""></div>
        <div><img src="home.svg" alt=""></div>` // Html Change

        let navdiv = document.querySelectorAll('.nav div')
        navdiv.forEach(div => {
            div.style.width = '40px'  // Change 2
        });

        content.style.marginLeft = '61px' // Change 3

        content.style.padding = '20px 120px' // Change 4

        content.style.width = 'calc(100% - 61px)' // Change 5
    }


    else {
        nav.style.width = '250px' // Change 1

        nav.innerHTML = `<div>
                <img src="home.svg" alt="">
                <div>Home</div>
            </div>
            <div>
                <img src="account.svg" alt="">
                <div>Account</div>
            </div>
            <div>
                <img src="club.svg" alt="">
                <div>Clubs</div>
            </div>
            <div>
                <img src="event.svg" alt="">
                <div>Up Coming Events</div>
            </div>
            <div>
                <img src="Recruitments.svg" alt="">
                <div>Recruitments</div>
            </div>
            <div>
                <img src="logout.svg" alt="">
                <div>logout</div>
            </div>
            <div>
                <div>About</div>
            </div>` // Html Change

        let navdiv = document.querySelectorAll('.nav div')
        navdiv.forEach(div => {
            div.style.width = '220px'  // Change 2
        });

        content.style.marginLeft = '251px' // Change 3
    
        content.style.padding = '20px' // Change 4
    
        content.style.width = 'calc(100% - 251px)' // Change 5
    }

})



















let card1 = document.getElementsByClassName('cards1')[0]
card1.addEventListener('click', () => {
    content.innerHTML = `<div class="info">
                <div class="block1">
                    <div class="box1">
                        <img class="size" src="aces.jpg" alt="" style="width: 100%; height: 100%;">
                    </div>
                    <div class="box2">
                        <div><b> Assocation of Computer Engineering Students (ACES)</b></div>
                    </div>
                </div>
                <div class="block2">
                    <ul class="club">
                        <li>Club Name:- Assocation of Computer Engineering Students (ACES)</li>
                        <li>Club Head:- Mr. Aniruddha Joshi</li>
                        <li>Club Faculty-Coordinator :- Dipalee Rane</li>
                        <li>Social media:- <a href="https://www.instagram.com/acesdypcoe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" >Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div class="disc">
                <p><b>Description:- </b>
                    Association of Computer Engineering Students (ACES) – Overview
                    The Association of Computer Engineering Students (ACES) is a student-driven organization dedicated
                    to fostering technical knowledge, innovation, and professional development among computer
                    engineering students. The club serves as a platform for students to engage in various academic,
                    technical, and extracurricular activities that enhance their skills and industry readiness.

                    Objectives of ACES:
                    To create an interactive learning environment for students.
                    To organize workshops, seminars, and guest lectures on emerging technologies.
                    To provide hands-on exposure to programming, AI, cybersecurity, and other tech domains.
                    To encourage teamwork, leadership, and problem-solving skills.
                    To bridge the gap between academia and industry through industrial visits and expert interactions.
                    To engage in social initiatives, fostering a sense of responsibility among students.
                    Activities Conducted by ACES:
                    Technical Workshops & Coding Competitions: Encouraging students to enhance their programming and
                    problem-solving skills.
                    Expert Talks & Webinars: Sessions with industry professionals and researchers.
                    Industrial Visits: Exposure to real-world applications of computer engineering.
                    Hackathons & Project Exhibitions: Providing a platform for students to showcase their innovations.
                    Social Initiatives: Visits to schools (e.g., Zilla Parishad School visit) to promote digital
                    literacy.
                    ACES plays a crucial role in shaping students into competent professionals by providing them with
                    opportunities beyond the classroom. It promotes teamwork, creativity, and a passion for learning
                    within the field of computer engineering.
                </p>
            </div>
            <div class="past">
                <p><b>Past Events:- </b>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit distinctio repellat molestiae quidem,
                    amet aperiam mollitia quam quos reiciendis fugit consectetur recusandae nihil modi delectus nisi
                    incidunt eius. Voluptate quas et officiis nemo illo animi quos, ipsa iure beatae numquam optio harum
                    labore est hic. Numquam sint fugiat odit ducimus repudiandae, reiciendis est quisquam. Omnis, quia
                    ipsa quibusdam voluptatem ullam esse voluptates necessitatibus quasi suscipit, deleniti temporibus
                    tenetur provident ad et dicta soluta. Eaque, officiis ea adipisci commodi voluptatem omnis
                    reprehenderit voluptates delectus, perspiciatis, dolore dolores quae iste praesentium laborum sint
                    asperiores? Impedit ipsa sapiente nihil pariatur quis incidunt obcaecati! ipsum dolor sit, amet
                    consectetur adipisicing elit. Sint distinctio perspiciatis corrupti repudiandae quidem cupiditate
                    hic explicabo debitis exercitationem voluptatum nostrum suscipit quasi odit modi ab libero, laborum
                    officiis praesentium?
                </p>
            </div>`
})
