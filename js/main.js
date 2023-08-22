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
    
            // Additional code to control display of tab content
            if (targetIndex === '0' && $(this).hasClass('active')) {
                $parentWrapper.find('.yu-tab-content-area').css('display', 'block');
            } else {
                $parentWrapper.find('.yu-tab-content-area').css('display', 'none');
            }
        });
    
        // Additional code to set initial tab content display
        if ($mobileNavTab.find('.tab-nav-0.active').length > 0) {
            $parentWrapper.find('.yu-tab-content-area').css('display', 'block');
        } else {
            $parentWrapper.find('.yu-tab-content-area').css('display', 'none');
        }
    });
    

    $('.sub-menu').each(function() {
        var $submenu = $(this);  // Current submenu element
        var $menuItem = $submenu.closest('li');  // Closest ancestor list item
        
        $menuItem.addClass('has-item');  // Add 'has-item' class to list item
        
        // Add a <div> element with class "nav-arrow" inside the list item
        // $('<div class="nav-arrow"></div>').appendTo($menuItem);
        $('<div class="nav-arrow"></div>').insertBefore($submenu);
    });

    var navContent = $(".col-nav").html();
    $(".nav-sidr-wrap").html(navContent);

    $("#menu-icon").click(function() {
        $(this).toggleClass("menu-open");
        $("body").toggleClass("is-open");
    });

    $('.sub-menu').slideUp(); // Slide up all sub-menus by default

    $('.nav-sidr-wrap .has-item > .nav-arrow').click(function(e) {
      e.preventDefault(); // Prevent the default link behavior
  
      var subMenu = $(this).next('.sub-menu'); // Find the corresponding sub-menu
  
      if (subMenu.is(':visible')) {
        subMenu.slideUp(); // Close the sub-menu if it's visible
        $(this).parent('.has-item').removeClass('open'); // Remove "open" class
      } else {
        $('.sub-menu').slideUp(); // Close all other open sub-menus
        $('.has-item').removeClass('open'); // Remove "open" class from other items
        subMenu.slideDown(); // Slide down the clicked sub-menu
        $(this).parent('.has-item').addClass('open'); // Add "open" class
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
    $(".scroll-button").click(function() {
        const targetSectionId = $(this).attr("data-href");
        const targetSection = $("#" + targetSectionId);
    
    $("html, body").animate({
          scrollTop: targetSection.offset().top
        }, 800); // Adjust the animation speed as needed
    });

    // $('.mobile-nav-tab .tab-nav-0.active').closest('.yu-tab-outer-wrapper').find('.yu-tab-content-area').addClass('yu-tab-active');
    // $('.mobile-nav-tab .tab-nav-0').closest('.yu-tab-outer-wrapper').find('.yu-tab-content-area').removeClass('yu-tab-active');
  
});
