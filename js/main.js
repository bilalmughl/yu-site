$(document).ready(function() {
    // Define the element you want to add the class to
    var targetElement = $('.yu-header');

    // Define the scroll point at which you want to add the class
    var scrollPoint = 100; // Adjust this value as needed

    // Bind the scroll event to the window
    $(window).scroll(function() {
        // Get the current scroll position
        var scrollPosition = $(window).scrollTop();

        // Check if the scroll position is greater than the defined scroll point
        if (scrollPosition > scrollPoint) {
        // Add the desired class to the target element
        targetElement.addClass('sticky');
        } else {
        // Remove the class if the scroll position is less than the scroll point
        targetElement.removeClass('sticky');
        }
    });



    $(".tabs a").click(function(e) {
        e.preventDefault();

        // Get the target tab content div and image based on the clicked tab
        var targetIndex = $(this).attr("class").replace("tab-nav-", "");
        var targetContent = $(".tab-content-" + targetIndex);
        var targetImage = $(".tab-img-" + targetIndex + " img");

        // Hide all tab content divs and images
        $(".content > [class*='tab-content-']").hide().removeClass("active"); // Remove "active" class from all content
        $(".tab-content-image > [class*='tab-img-']").hide();

        // Remove active class from all tab links
        $(".tabs a").removeClass("active");

        // Add active class to the clicked tab link
        $(this).addClass("active");

        // Show the selected tab content div and image
        targetContent.show().addClass("active"); // Add "active" class to the selected content
        targetImage.show().addClass("active"); // Add "active" class to the selected content
    });

    // Add active class on click
    $('.yu-asidebar-container li a').on('click', function(event) {
        // event.preventDefault();
        $('.yu-asidebar-container li a').removeClass('active');
        $(this).addClass('active');
    });


    // $(".yu-tab-outer-wrapper .yu-tab-content-nav button").click(function(e) {
    //     e.preventDefault();
    //     // If the clicked button already has the "active" class, do nothing
    //         if ($(this).hasClass("active")) {
    //             return;
    //         }
    //     // Get the target tab content div and image based on the clicked tab
    //     var targetClass = $(this).attr("class");
    //     var targetIndex = targetClass.replace("tab-nav-", "");
    //     var targetContent = $(".yu-tab-outer-wrapper .tab-nav-" + targetIndex + "-content");
    //     var targetImage = $(".yu-tab-outer-wrapper .tab-nav-" + targetIndex + "-content .yu-tab-thumbnail img");
        
    //     // Hide all tab content divs and images
    //     $(".yu-tab-outer-wrapper .yu-tab-content-nav-area > [class*='tab-nav-']").hide();
        
    //     // Remove active class from all tab links and tab content divs
    //     $(".yu-tab-outer-wrapper .yu-tab-content-nav button").removeClass("active");
    //     $(".yu-tab-outer-wrapper .yu-tab-content-nav-area > [class*='tab-nav-']").removeClass("active");
        
    //     // Add active class to the clicked tab link and tab content div
    //     $(this).addClass("active");
        
    //     // Show the selected tab content div and image
    //     targetContent.show().addClass("active");;
    //     targetImage.show();
    // });
    
    // $(".yu-tab-outer-wrapper2 .yu-tab-content-nav button").click(function(e) {
    //     e.preventDefault();
    //     // If the clicked button already has the "active" class, do nothing
    //         if ($(this).hasClass("active")) {
    //             return;
    //         }
    //     // Get the target tab content div and image based on the clicked tab
    //     var targetClass = $(this).attr("class");
    //     var targetIndex = targetClass.replace("tab-nav-", "");
    //     var targetContent = $(".yu-tab-outer-wrapper2 .tab-nav-" + targetIndex + "-content");
    //     var targetImage = $(".yu-tab-outer-wrapper2 .tab-nav-" + targetIndex + "-content .yu-tab-thumbnail img");
        
    //     // Hide all tab content divs and images
    //     $(".yu-tab-outer-wrapper2 .yu-tab-content-nav-area > [class*='tab-nav-']").hide();
        
    //     // Remove active class from all tab links and tab content divs
    //     $(".yu-tab-outer-wrapper2 .yu-tab-content-nav button").removeClass("active");
    //     $(".yu-tab-outer-wrapper2 .yu-tab-content-nav-area > [class*='tab-nav-']").removeClass("active");
        
    //     // Add active class to the clicked tab link and tab content div
    //     $(this).addClass("active");
        
    //     // Show the selected tab content div and image
    //     targetContent.show().addClass("active");;
    //     targetImage.show();
    // });
    $('.yu-tab-content-nav button').on('click', function() {
        if ($(this).hasClass("active")) {
            return;
        }
        var targetClass = $(this).attr("class");
        var targetIndex = targetClass.replace("tab-nav-", "");
        var $parentWrapper = $(this).closest('.yu-tab-outer-wrapper');
        var targetContent = $parentWrapper.find(".tab-nav-" + targetIndex + "-content");

        // Remove "active" class from all buttons and content
        $parentWrapper.find('.yu-tab-content-nav button').removeClass('active');
        $parentWrapper.find('.yu-tab-content-nav-area div').removeClass('active');

        // Add "active" class to the clicked button and content
        $(this).addClass('active');
        targetContent.addClass('active');

        // Hide all content of other tabs
        $parentWrapper.find('.yu-tab-content-nav-area [class*="tab-nav-"]').hide();

        // Show the content of the clicked tab
        targetContent.show();
    });
});
