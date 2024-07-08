const socialMedia = document.querySelector("#social-media");
const navbar = document.querySelector("#navbar");


document.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add("hide");
        socialMedia.classList.add("hide-social-media");
    } else {
        navbar.classList.remove("hide");
        socialMedia.classList.remove("hide-social-media");
    }
});