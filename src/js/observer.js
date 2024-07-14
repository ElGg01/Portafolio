function checkVisivility(entries){
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            //console.log('Esta insersectando');
            if (entry.target.classList.contains('fadeInDown')) {
                entry.target.classList.add('animate__fadeInDown');
            }
            if (entry.target.classList.contains('fadeInUp')) {
                entry.target.classList.add('animate__fadeInUp');
            }
            if (entry.target.classList.contains('jackInTheBox')) {
                entry.target.classList.add('animate__jackInTheBox');
            }
            if (entry.target.classList.contains('fadeIn')) {
                entry.target.classList.add('animate__fadeIn');
            }
        } else {
            console.log('El elemento no esta intersectando');
        } 
    });
}

const observer = new IntersectionObserver(checkVisivility, {
    threshold: 0.5,
});

const elements = document.querySelectorAll('.animate__animated');

elements.forEach(element => {
    //element.style.opacity = 0;
    observer.observe(element);
});