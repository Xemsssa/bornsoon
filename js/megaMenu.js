// Mega menu slide down on hover with carousel

$(document).ready(function(){
    $(".header_hamburger").on('click', function() {
        // console.log("clicked");
        let navigation = $(".navigation");
        // console.log(menu);
        navigation.toggleClass("toggle");
    })
});