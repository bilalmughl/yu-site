$(document).ready(function() {
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
});
