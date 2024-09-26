$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
});
$('[data-fancybox]').fancybox({
    buttons: ['close'],
    wheel: false,
    transitionEffect: "",
    loop: true,
    toolbar: false,
    clickContent: false
});


const header = document.querySelector(".site-header");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 150) {
        header.classList.add(toggleClass);
    } else {
        header.classList.remove(toggleClass);
    }
});


$(document).ready(function() {
    var scrollTop = $(".scrollTop");

    $(window).scroll(function() {
        var topPos = $(this).scrollTop();
        if (topPos > 100) {
            $(scrollTop).css("opacity", "1");

        } else {
            $(scrollTop).css("opacity", "0");
        }

    });
    $(scrollTop).click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;

    });
    var h1 = $("#h1").position();
    var h2 = $("#h2").position();
    var h3 = $("#h3").position();

    $('.link1').click(function() {
        $('html, body').animate({
            scrollTop: h1.top
        }, 500);
        return false;

    });

    $('.link2').click(function() {
        $('html, body').animate({
            scrollTop: h2.top
        }, 500);
        return false;

    });

    $('.link3').click(function() {
        $('html, body').animate({
            scrollTop: h3.top
        }, 500);
        return false;

    });


    $('.owl-carousel').owlCarousel({
        items: 1, // Number of items per slide
        loop: true, // Enable looping
        dots: true, // Enable dots
        dotsContainer: '.custom-dots', // Set custom dots container
        autoplay: true // Optional: Enable autoplay
    });

});


$('.manu__toggle').click(function() {
    $('.manu__toggle').toggleClass("active");
    event.stopPropagation();
    $('.navbar').slideToggle();
    $('.nav__toggle').addClass('active')



});



$('.close__menu').click(function() {
    $('.navbar').hide();
    $('.nav__toggle').removeClass('active')
});