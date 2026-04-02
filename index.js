/* these are my scripts. javascript is the languge that i am
    least familiar with out of the three, so im learning 
    as i go. */

// to toggle the card flipping animation
const card = document.querySelector(".innerCard");
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const pagecontents = document.querySelector(".page_contents");

card.addEventListener("click", function (e) {
    card.classList.toggle('isFlipped');

    setTimeout(() => {
        pagecontents.classList.add('beenFlipped');
    }, 180);
});

// the make the navbar only appear after a certain amount of scroll
window.addEventListener("scroll", function (e){
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const scrollPercent = (scrollY/ (docHeight - winHeight)) * 100;

    if (pagecontents.classList.contains('beenFlipped') && scrollPercent > 25){
        navbar.classList.add('beenFlipped');
    }
});

