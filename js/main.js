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

    // Handle submenu interaction based on window width
    function handleSubmenuInteraction() {
        if ($(window).width() <= 768) {
            $(".col-nav ul li").click(function () {
                $(this).find(".sub-menu").slideToggle();
            });
        } else {
            $(".col-nav ul li").hover(
                function () {
                    $(this).find(".sub-menu").slideDown();
                    $(this).addClass("active");
                },
                function () {
                    $(this).find(".sub-menu").slideUp();
                    $(this).removeClass("active");
                }
            );
        }
    }

    handleSubmenuInteraction();

    // Adjust submenu behavior on window resize
    $(window).on("resize", function () {
        if ($(window).width() <= 768) {
            $(".col-nav ul li").off("mouseenter mouseleave");
        } else {
            $(".col-nav ul li").off("click");
            handleSubmenuInteraction();
        }
    });
});
