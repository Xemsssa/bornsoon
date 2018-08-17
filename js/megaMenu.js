// Mega menu slide down on hover with carousel

$(document).ready(function(){
    $(".header_hamburger").on('click', onClick(".navigation"));


    // todo
    // $(".sub-title").on('click', onClick(".menu-block"));
    $(".sub-title").on('click', function() {
        // alert("clicked");
        let that = this;

        let el = $(that).siblings().first();
        // let el = $(that).siblings('ul');
        // let el = $(that).siblings('ul:first');
        // console.log("done " + el);
        el.toggle();
    });
    

    function onClick(element) {
        // console.log("clicked");
        let menu_block = $(element);
        menu_block.toggle();
    }

});
