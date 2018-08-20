// Mega menu slide down on hover with carousel

$(document).ready( () => {
    // hamburgermobile menu
    // console.log($(".header_hamburger"));
    // $(".header_hamburger").on('click', onClick(".navigation"));


    // var isVisible = $('.header_hamburger').style.display == "block";
    // console.log(isVisible);

    if (!($(".header_hamburger").css("display")== "none")) {
        // alert("visible");
        $(".header_hamburger").on('click', onClick(".navigation"));
    } 
    // else {
    //     alert("inVisible");
    // } 



    // show  submenu when click on title
    $(".sub-title").on('click', function () {
        let that = this;
        let el = $(that).siblings("ul").first();
        // let arrows = $(that).children('div').children("img");
        // let arrows = $(that).children('.sub-title_icon');
        // $(arrow).children();
        // console.log($(arrows).children());
        el.toggle();
        // $(arrows).css("transform",  "rotate(90deg)");
    });
    
    // change icon when clicking on favorite icon
    // $(".salesItem_favorite").on('click', onClick(".salesItem_icon"));
    $(".salesItem_favorite").on('click', function (){
        // alert("clicked");
        let that = this;
        $(that).toggleClass('fav');
    });

    // show menu block
    function onClick(element) {
        // console.log("clicked");
        let menu_block = $(element);
        menu_block.toggle();
    }

});
