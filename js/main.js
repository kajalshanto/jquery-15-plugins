// Basic jQuery Activation
$(document).ready(function () {
    // counter up 
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    // Wow js 
    new WOW().init();
    //magnific popup
    $('.image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // simpleLightbox
    $('.imageGallery1 a').simpleLightbox();

    // Isotop
    // init Isotope
    var $grid = $('.grid').isotope({
        // options
        itemSelector: '.grid_select',
    });
    // filter items on button click
    $('.isotop_button').on('click', 'a', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    //Slick 
    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    // Owl carousel
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 4,
        nav: true,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
    //Parallax
    $('#parallax').parallaxie({
        speed: 0.5,
        offset: 40,
    });

});

// type js
var typed = new Typed('.type', {
    strings: [
        'Web Developer',
        'Full Stack Web Devloper',
        'Font-End Developer',
        'Freelace Web Developer'
    ],
    // Default value
    typeSpeed: 80,
    backSpeed: 60,
    loop: true,
});

// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation 
                });
            }
        }
    });

// Read more
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
        moreText.style.transition = "all .3s ease-in-out";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}


// Scroll to top
$('body').materialScrollTop();

//footer current year with this following
document.getElementById("year").innerHTML = new Date().getFullYear();