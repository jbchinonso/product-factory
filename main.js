const hamburger = document.querySelector('.hambuger');
const hamburgerContainer = document.querySelector('.hamburgerCover');

const navlinks = document.querySelector('.navlinks');


hamburgerContainer.addEventListener('click',(e)=>{
    navlinks.classList.toggle('show');
    hamburgerContainer.classList.toggle('open');
})

var docwidth = document.documentElement.offsetWidth;

[].forEach.call(

    document.querySelectorAll('*'),
    function(el){
        if(el.offsetWidth > docwidth){
            console.log(el);
        }
    }
);