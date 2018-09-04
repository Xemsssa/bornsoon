$(document).ready(() =>{

    $(".delivery_type").on("click", () => {
        // alert("click");
        $(this).addClass("delivery_selected");

        $(this).siblings().removeClass("delivery_selected");
    });
});