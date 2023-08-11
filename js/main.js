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




    $(".yu-tab-content-nav button").click(function(e) {
        e.preventDefault();
        
        // Get the target tab content div and image based on the clicked tab
        var targetClass = $(this).attr("class");
        var targetIndex = targetClass.replace("tab-nav-", "");
        var targetContent = $(".tab-nav-" + targetIndex + "-content");
        var targetImage = $(".tab-nav-" + targetIndex + "-content .yu-tab-thumbnail img");
        
        // Hide all tab content divs and images
        // $(".yu-tab-content-nav-area > [class*='tab-nav-']").has().hide();
        $(".yu-tab-content-nav-area > [class*='tab-nav-']").not(targetContent).removeClass("active").hide();

        
        // Remove active class from all tab links and tab content divs
        $(".yu-tab-content-nav button").removeClass("active");
        $(".yu-tab-content-nav-area > [class*='tab-nav-']").removeClass("active");
        
        // Add active class to the clicked tab link and tab content div
        $(this).addClass("active");
        targetContent.addClass("active");
        
        // Show the selected tab content div and image
        targetContent.show();
        targetImage.show();
    });
    
    
});
