// Mega menu slide down on hover with carousel

$(document).ready(function(){
    $(".header_hamburger").on('click', function() {
        // console.log("clicked");
        let navigation = $(".navigation");
        // console.log(menu);
        navigation.toggleClass("toggle");
    })

    
    

    $(".dropdown").on('mouseenter', function() {

        let el = $("#el");

        let text =  $(this).find('.dropdownMenu_header');

        // console.log(el);
        
        
        // let el = document.getElementById('el');
        for (let length = text.length; length >= 0; length-- ) {
            // console.log(el[length]);
            el.append(text[length]);
        }
    });

    $(".dropdown").mouseleave( function() {
        // alert('leave');

        let el = $("#el");
        // el = '';
    });


});
