$(document).ready(() => {
    $('.menu-opener').on('click', (e) => {
        $('body').toggleClass('side-open');

        return false;
    });

    $(document).bind("mouseup touchend", (e) => {
        let obj = $('.navbar');
        if (!obj.is(e.target) && obj.has(e.target).length === 0 && !$('.menu-opener').is(e.target)) {
            $('body').removeClass('side-open');
        }
    });

    $('li.nav-item.dropdown span').on('click', (e) => {
        let el = $(e.currentTarget);
        
        el.toggleClass('opened');
    });

    if(!$("html").hasClass("stories")){

        let sticky_offset = $('.sticky-wrapper').offset().top;
        $('.sticky-wrapper').parent().height($('.sticky-wrapper').height());

        $(window).on('scroll', (e) => {
            let el = $('.sticky-wrapper');

            if($(window).scrollTop() > sticky_offset){
                $('body').addClass('sticky');
            }else{
                $('body').removeClass('sticky');
            }
        });

    }else{

        $(window).on('scroll', (e) => {
            if($(window).scrollTop() > 50){
                $(".stories-menu").show();
            }else{
                $(".stories-menu").hide();
            }
        });

    }

    if($(".carousel").length){
        $(".carousel").on("touchstart", function(event){
            var xClick = event.originalEvent.touches[0].pageX;
            $(this).on("touchmove", function(event){
                var xMove = event.originalEvent.touches[0].pageX;
                if( Math.floor(xClick - xMove) > 25 ){
                    $(this).carousel('next');
                }
                else if( Math.floor(xClick - xMove) < -25 ){
                    $(this).carousel('prev');
                }
            });
            $(this).on("touchend", function(){
                $(this).off("touchmove");
            });
        });
    }

    $(".stories .fa-moon").click(function(){
        if($(".stories .fa-moon").hasClass("far")){
            $(".stories").removeClass("stories-light").addClass("stories-dark");
            $(".stories .fa-moon").removeClass("far").addClass("fas");
            $(".header img").attr("src", "/img/logo_white.svg");
            $.each($("iframe"), function(key, value){
                $(value).attr("src", $(value).attr("src").replace("style=light", "style=dark"));
            });
        }else{
            $(".stories").removeClass("stories-dark").addClass("stories-light");
            $(".stories .fa-moon").removeClass("fas").addClass("far");
            $(".header img").attr("src", "/img/logo_black.svg");
            $.each($("iframe"), function(key, value){
                $(value).attr("src", $(value).attr("src").replace("style=dark", "style=light"));
            });
        }
    });

    $(".stories .spoiler span").click(function(){
        $(this).parent().find("p").toggle();
    });

    $(window).resize(function(){
        $.each($(".resize-iframe"), function(key, value){
            if(window.innerHeight < window.innerWidth){
                $(value).css("height", $(value).outerWidth() / 2);
            }else{
                $(value).css("height", $(value).outerWidth());
            }
        });
        $.each($(".resize-iframe-half"), function(key, value){
            if(window.innerHeight < window.innerWidth){
                $(value).css("height", $(value).outerWidth() / 4);
            }else{
                $(value).css("height", $(value).outerWidth() / 2);
            }
        });
    });
    $(window).trigger("resize");

});