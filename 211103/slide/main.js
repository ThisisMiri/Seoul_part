

var firstSlide = document.querySelector('.item:first-child');
//firstSlide.classList.add('show');

function slide() {
    var currentSlide = document.querySelector('.show');
    console.log(currentSlide);


    if(currentSlide) {
        currentSlide.classList.remove('show');
        var nextSlide = currentSlide.nextElementSibling;

        if(nextSlide) {
            nextSlide.classList.add('show');

        } else {
            firstSlide.classList.add('show');
        }



    } else {
        firstSlide.classList.add('show');
    }

}

slide();

setInterval(slide, 2000);

























