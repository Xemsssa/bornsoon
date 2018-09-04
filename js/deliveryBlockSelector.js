$(document).ready(() =>{
    $(".delivery_type").on("click", (e) => {
        // console.log("click");

        // $(".delivery_icon").removeClass("hover");

        let el = $(e.currentTarget);

        el.addClass("delivery_selected");
        el.siblings().removeClass("delivery_selected");
        

        // console.log(el.children().find(".delivery_icon").css("filter", "opacity(1)"));
        el.find(".delivery_icon").css("filter", "opacity(1)");
        el.find(".delivery_icon").addClass("hover");

        // el.siblings().find(".delivery_icon").removeClass("hover");
        
    });
});