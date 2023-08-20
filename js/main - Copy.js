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
    $(".has-item > a").click(function (event) {
        event.preventDefault();
        
        // Slide up other sub-menus
        $(".sub-menu").not($(this).next()).slideUp();
        
        // Toggle the clicked sub-menu
        $(this).next(".sub-menu").slideToggle();
    });
    // Tab switching functionality
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

    // Handle active state for sidebar navigation
    $('.yu-asidebar-container li a').on('click', function(event) {
        $('.yu-asidebar-container li a').removeClass('active');
        $(this).addClass('active');
    });

    // Tab switching for yu-tab-outer-wrapper
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

    // Clone tab content navigation for mobile
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

    // Add "has-item" class to parent li for sub-menu
    $('.sub-menu').each(function() {
        $(this).closest('li').addClass('has-item');
    });

    // Clone navigation content for mobile sidebar
    var navContent = $(".col-nav").html();
    $(".nav-sidr-wrap").html(navContent);

    // Toggle mobile menu icon and body class
    $("#menu-icon").click(function() {
        $(this).toggleClass("menu-open");
        $("body").toggleClass("is-open");
    });

    // // Handle submenu interaction based on window width
    // function handleSubmenuInteraction() {
    //     if ($(window).width() <= 768) {
    //         $(".col-nav ul li").click(function () {
    //             $(this).find(".sub-menu").slideToggle();
    //         });
    //     } else {
    //         $(".col-nav ul li").hover(
    //             function () {
    //                 $(this).find(".sub-menu").slideDown();
    //                 $(this).addClass("active");
    //             },
    //             function () {
    //                 $(this).find(".sub-menu").slideUp();
    //                 $(this).removeClass("active");
    //             }
    //         );
    //     }
    // }
                    // $('.meeting-indicator').each(function(index) {
                    //     $('.connecting,.joined').hide();
                    //     var indicator = $(this);
                    //     setTimeout(function() {
                    //         indicator.find('.ringing').hide();
                    //         indicator.find('.connecting').show();
                    //     }, index * 3000); // Delay increases with each meeting indicator
                    //     setTimeout(function() {
                    //         indicator.find('.connecting').hide();
                    //         indicator.find('.joined').show();
                    //     }, (index * 3000) + 3000); // Delay increases with each meeting indicator, plus 3 seconds
                    // });
    // handleSubmenuInteraction();
    // $('.ringing').show();
    // $('.connecting,.joined').hide();
    // setTimeout(function() {
    //     $('.ringing').hide();
    //     $('.connecting').show();
    // }, 1000);
    // setTimeout(function() {
    //     $('.connecting').hide();
    //     $('.joined').show().closest('.meeting-indicator').addClass("meeting-indicator-joind");
    // }, 12000);
    // Adjust submenu behavior on window resize
    $(window).on("resize", function () {
        if ($(window).width() <= 768) {
            $(".col-nav ul li").off("mouseenter mouseleave");
        } else {
            $(".col-nav ul li").off("click");
            handleSubmenuInteraction();
        }
    });



    // $('.meeting-indicator').each(function(index) {
    //     var indicator = $(this);
    //     var h5 = indicator.find('.meeting-title h5');
    //     // var h5 = $('.meeting-indicator-joind .meeting-title h5');
    //     $('.connecting,.joined').hide();
    //     setTimeout(function() {
    //         h5.css('opacity', 1);
    //         indicator.find('.ringing').hide();
    //         indicator.find('.connecting').show();
    //     }, index * 3000);
       
    //     setTimeout(function() {
    //         indicator.find('.connecting').hide();
    //         indicator.find('.joined').show().closest('.meeting-indicator').addClass("meeting-indicator-joind");
    //          // Set opacity to 1 after "joined" is shown with 3000ms delay
    //          setTimeout(function() {
    //             h5.css('opacity', 1);
    //         }, (index * 6000) + 3000);
    //     }, (index * 3000) + 3000);
    // });
    // $('.meeting-indicator').each(function(index) {
    //     var indicator = $(this);
    //     var h5 = indicator.find('.meeting-title h5');
    //     $('.connecting, .joined').hide();

    //     h5.fadeOut(0); // Initial fade-out

    //     setTimeout(function() {
    //         h5.fadeIn();
    //         indicator.find('.ringing').hide();
    //         indicator.find('.connecting').show();
    //     }, index * 3000);

    //     setTimeout(function() {
    //         indicator.find('.connecting').hide();
    //         indicator.find('.joined').show().closest('.meeting-indicator').addClass("meeting-indicator-joind");

    //         setTimeout(function() {
    //             h5.fadeIn();
    //         }, (index * 6000) + 3000);
    //     }, (index * 3000) + 3000);
    // });



    // $('.meeting-indicator').each(function(index) {
    //     var indicator = $(this);
    //     var h5 = indicator.find('.meeting-title h5');
    //     $('.connecting, .joined').hide();
        
    //     var dataDelay = parseInt(indicator.data('delay')); // Get the data-delay attribute value as an integer
    //     var dataShow = parseInt(indicator.data('delay')); // Get the data-delay attribute value as an integer
    //     indicator.has('hide').fadeout();
    //     setTimeout(function() {
    //         indicator.removeClass('hide').fadeIn();
    //     }, dataShow);

    //     h5.fadeOut(0); // Initial fade-out

    //     setTimeout(function() {
    //         h5.fadeIn();
    //         indicator.find('.ringing').hide();
    //         indicator.find('.connecting').show();
    //     }, dataDelay);

    //     setTimeout(function() {
    //         indicator.find('.connecting').hide();
    //         indicator.find('.joined').show().closest('.meeting-indicator').addClass("meeting-indicator-joind");

    //         setTimeout(function() {
    //             h5.fadeIn();
    //         }, dataDelay * 2);
    //     }, dataDelay * 2);
    // });


    
$('.meeting-indicator').each(function(index) {
        var indicator = $(this);
        var h5 = indicator.find('.meeting-title h5');
        var meetingtitle = indicator.find('.meeting-title');
        $('.connecting, .joined').hide();

        var dataDelay = parseInt(indicator.data('delay'));
        var dataShow = parseInt(indicator.data('show'));

        indicator.fadeOut(); // Initially hide the indicator
        //meetingtitle.fadeOut(); // Initially hide the indicator

        setTimeout(function() {
            indicator.fadeIn().removeClass('hide');
        }, dataShow);
        // setTimeout(function() {
        //     meetingtitle.fadeIn().css('width', '130px');
        // }, dataShow * 2);

        h5.fadeOut(0); // Initial fade-out

        setTimeout(function() {
            h5.fadeIn();
            indicator.find('.ringing').hide();
            indicator.find('.connecting').show();
        }, dataShow * 2);

        setTimeout(function() {
            indicator.find('.connecting').hide();
            indicator.find('.joined').show().closest('.meeting-indicator').addClass("meeting-indicator-joind");

            // setTimeout(function() {
            //     h5.fadeIn();
            // }, dataDelay * dataShow * 2);
        }, dataDelay * 2);
    });
});
