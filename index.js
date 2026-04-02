
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


window.addEventListener("scroll", function (e){
    const scrollY = window.scrollY;
    if (scrollY > 500){
        navbar.classList.add('beenFlipped');
    }
});

