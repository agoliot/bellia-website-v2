function scrollToElement(element) {
    let scrollId = $(element).attr('scrollId');
    $('html, body').animate({
        scrollTop: $("#" + scrollId).offset().top
    }, "slow");
}

$(window).scroll(function(event) {
    //position dans l'ecan
    const scrollPos = $(window).scrollTop();
    //Taille de la fenetre
    const heightWindow = $(window).outerHeight();
    // Taille de la page
    const heightPage = $(document).height();

    let menu = $("#menu-flottant");
    if ($('#home').height() < scrollPos) {
        if (!menu.hasClass('fixed')) {
            menu.addClass('fixed');
        }
    } else {
        menu.removeClass('fixed');
    }

    if (scrollPos + heightWindow == heightPage) {
        $('#menu-flottant a:not(:last-child)').removeClass("actif");
        $('#menu-flottant a').last().addClass("actif");
    } else {
        $('#menu-flottant a').removeClass("actif");
        $('#menu-flottant a').each(function() {
            let scrollId = $(this).attr('scrollId');
            let scrollElement = $("#" + scrollId);

            if (scrollElement.offset().top <= scrollPos + 10) {
                $(this).addClass('actif');
            }
        });
        $('#menu-flottant a.actif').not(":last").removeClass("actif");
    }


});


function onScrollInit(items, elemTrigger) {
    var offset = $(window).outerHeight() / 1.6;
    items.each(function() {
        let elem = $(this), animation = $(this).attr('animation');
        elem.waypoint(function() {
            elem.addClass('animated').addClass(animation);
        },
        {
            offset:offset,
        });
    });
}

setTimeout(function() { onScrollInit($('.waypoint')) }, 1000);


$("html, body").animate({ scrollTop: 0 }, "slow ");