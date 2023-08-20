$(document).ready(function() {
    // Sticky header behavior
    var targetElement = $('.yu-header');
    var scrollPoint = 100;

    $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop();
        if (scrollPosition > scrollPoint) {
            targetElement.addClass('sticky');
        } else {
            targetElement.removeClass('sticky');
        }
    });

    $(".has-item > a").click(function(event) {
        event.preventDefault();
        $(".sub-menu").not($(this).next()).slideUp();
        $(this).next(".sub-menu").slideToggle();
    });

    $(".tabs a").click(function(e) {
        e.preventDefault();
        var targetIndex = $(this).attr("class").replace("tab-nav-", "");
        var targetContent = $(".tab-content-" + targetIndex);
        var targetImage = $(".tab-img-" + targetIndex + " img");

        $(".content > [class*='tab-content-']").hide().removeClass("active");
        $(".tab-content-image > [class*='tab-img-']").hide();

        $(".tabs a").removeClass("active");
        $(this).addClass("active");

        targetContent.show().addClass("active");
        targetImage.show().addClass("active");
    });

    $(".yu-asidebar-container li a").on('click', function(event) {
        $('.yu-asidebar-container li a').removeClass('active');
        $(this).addClass('active');
    });

    $('.yu-tab-content-nav button').on('click', function() {
        var targetClass = $(this).attr("class");
        var targetIndex = targetClass.replace("tab-nav-", "");
        var $parentWrapper = $(this).closest('.yu-tab-outer-wrapper');
        var targetContent = $parentWrapper.find(".tab-nav-" + targetIndex + "-content");

        $parentWrapper.find('.yu-tab-content-nav button').removeClass('active');
        $parentWrapper.find('.yu-tab-content-nav-area div').removeClass('active');

        $(this).addClass('active');
        targetContent.addClass('active');

        $parentWrapper.find('.yu-tab-content-nav-area [class*="tab-nav-"]').hide();
        targetContent.show();
    });

    $('.yu-tab-outer-wrapper').each(function() {
        var $parentWrapper = $(this);
        var $mobileNavTab = $parentWrapper.find('.mobile-nav-tab');
        var $tabContentNavClone = $parentWrapper.find('.yu-tab-content-nav').clone();
        $tabContentNavClone.appendTo($mobileNavTab);

        $mobileNavTab.find('button').on('click', function() {
            var targetClass = $(this).attr("class");
            var targetIndex = targetClass.replace("tab-nav-", "");
            var targetContent = $parentWrapper.find(".tab-nav-" + targetIndex + "-content");

            $parentWrapper.find('.yu-tab-content-nav button').removeClass('active');
            $parentWrapper.find('.yu-tab-content-nav-area div').removeClass('active');

            $(this).addClass('active');
            targetContent.addClass('active');

            $parentWrapper.find('.yu-tab-content-nav-area [class*="tab-nav-"]').hide();
            targetContent.show();
        });
    });

    $('.sub-menu').each(function() {
        $(this).closest('li').addClass('has-item');
    });

    var navContent = $(".col-nav").html();
    $(".nav-sidr-wrap").html(navContent);

    $("#menu-icon").click(function() {
        $(this).toggleClass("menu-open");
        $("body").toggleClass("is-open");
    });

    $(window).on("resize", function() {
        if ($(window).width() <= 768) {
            $(".col-nav ul li").off("mouseenter mouseleave");
        } else {
            $(".col-nav ul li").off("click");
            handleSubmenuInteraction();
        }
    });

    $('.meeting-indicator').each(function(index) {
        var indicator = $(this);
        var h5 = indicator.find('.meeting-title h5');
        var meetingtitle = indicator.find('.meeting-title');
        $('.connecting, .joined').hide();

        var dataDelay = parseInt(indicator.data('delay'));
        var dataShow = parseInt(indicator.data('show'));

        indicator.fadeOut();
        setTimeout(function() {
            indicator.fadeIn().removeClass('hide');
        }, dataShow);

        h5.fadeOut(0);

        setTimeout(function() {
            h5.fadeIn();
            indicator.find('.ringing').hide();
            indicator.find('.connecting').show();
        }, dataShow * 2);

        setTimeout(function() {
            indicator.find('.connecting').hide();
            indicator.find('.joined').show().closest('.meeting-indicator').addClass("meeting-indicator-joind");
        }, dataDelay * 2);
    });
});
