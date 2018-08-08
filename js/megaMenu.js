// Mega menu slide down on hover with carousel

$(document).ready(function(){
    $(".dropdown").on('click',        
        function() {
            $('.dropdownMenu', this).not('.in .dropdownMenu').stop(true,true).slideDown("400");
            // $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
            // $(this).toggleClass('open');       
        }
    );
});