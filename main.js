const hamburger = document.querySelector('.hambuger');
const hamburgerContainer = document.querySelector('.hamburgerCover');

const navlinks = document.querySelector('.navlinks');


hamburgerContainer.addEventListener('click',(e)=>{
    navlinks.classList.toggle('show');
    hamburgerContainer.classList.toggle('open');
})


const masters = document.querySelectorAll('.master img');
const overlay = document.querySelector('.overlay')
console.log(masters);

// masters.forEach(element => {
//     element.addEventListener('mouseover',(e)=>{
//         this.overlay.style.visibility = 'visible';
//         console.log('yeah')
//     })
// })
