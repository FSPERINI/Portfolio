//Faire isMobile return bool
$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $('.header__nav-logo').css("visibility", "hidden");
        $('.header__nav-logo').css("opacity", "0");
    } else {
        $('.header__nav-logo').css("visibility", "visible");
        $('.header__nav-logo').css("opacity", "1");
    }
});

$('.header__nav-icon').click((e) => {

    

    $("#nav").toggleClass(`header__list--mobile`);
    $("#nav").toggleClass(`header__list`);


    if($('.header__nav-icon path').attr("d") == "M0 0H18V2H0V0ZM0 7H18V9H0V7ZM0 14H18V16H0V14Z") {
        $('.header__nav-icon path').attr("d", "M2.26641 0.380005L7.01841 6.892L11.7704 0.380005H13.9484L8.07441 8.3L13.7724 16H11.5944L7.01841 9.70801L2.44241 16H0.242406L5.94041 8.3L0.0664062 0.380005H2.26641Z");
    }
    else{
        $('.header__nav-icon path').attr("d", "M0 0H18V2H0V0ZM0 7H18V9H0V7ZM0 14H18V16H0V14Z");

    }
})

