console.log('Hello, world!')
let show1 = document.querySelector('.show1')
let show2 = document.querySelector('.show2')
let show3 = document.querySelector('.show3')
let section1 = document.querySelector('.section1')
let section2 = document.querySelector('.section2')
let section3 = document.querySelector('.section3')
show1.addEventListener('click', () => {
    if(section1.style.height != '390px'){
        section1.style.flexWrap = 'wrap';
        section1.style.height = '390px';
        section1.innerHTML = section1.innerHTML + `<div class="cards1"></div>
                    <div class="cards1"></div>
                    <div class="cards1"></div>
                    <div class="cards1"></div>
                    <div class="cards1"></div>
                    <div class="cards1"></div>`
    }
})

show2.addEventListener('click', () => {
    if(section2.style.height != '390px'){
        section2.style.flexWrap = 'wrap';
        section2.style.height = '390px';
        section2.innerHTML = section2.innerHTML +  `<div class="cards2"></div>
        <div class="cards2"></div>
        <div class="cards2"></div>
        <div class="cards2"></div>
        <div class="cards2"></div>
        <div class="cards2"></div>`
    }
})

show3.addEventListener('click', () => {
    if(section3.style.height != '390px'){
        section3.style.flexWrap = 'wrap';
        section3.style.height = '390px';
        section3.innerHTML = section3.innerHTML +  `<div class="cards3"></div>
        <div class="cards3"></div>
        <div class="cards3"></div>
        <div class="cards3"></div>
        <div class="cards3"></div>
        <div class="cards3"></div>`
    }
})

let content = document.querySelector('.content')
let card1 = document.querySelector('.cards1')
card1.addEventListener('click', () => {
    content.innerHTML = '<div>card 1 is clicked</div>'
})
