var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
 if (window.pageYOffset > 100) {
   nav.classList.add('bg-green', 'shadow');
 } else {
   nav.classList.remove('bg-dark', 'shadow');
 }
});

$( document ).ready(function() {
     setTimeout(carregar, 2500);
});

function carregar() {
    $('#teste').show();
}


$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:11,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            navigation: true,
            dots: true
          
        },
        600:{
            items:2,
            nav:true,
            dots: true,
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:true
        },
        1280:{
            items:3,
            nav:false,
            loop:false,
            arrows: true,
            dots: true,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true
        }
    }
})


