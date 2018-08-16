// Mega menu slide down on hover with carousel

$(document).ready(function(){
    $(".header_hamburger").on('click', onClick(".navigation"));


    // todo
    // $(".sub-title").on('click', onClick(".menu-block"));
    $(".sub-title_text").on('click', function() {
        // alert("clicked");
        
        let menu_block = $(".menu-block");
        // menu_block.toggleClass("show");
        menu_
        menu_block.css("display", "block !important");
        
    });
    

    function onClick(element) {
        console.log("clicked");
        let menu_block = $(element);
        menu_block.toggleClass("toggle");
    }

});
