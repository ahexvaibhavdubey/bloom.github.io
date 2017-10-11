$(document).ready(function () {
    $(window).scroll( function(){ 
        if( $(this).scrollTop() > 50 ){
            $(".navbar").addClass("darker-bg navbar-fixed-top");
        } else {
            $(".navbar").removeClass("darker-bg navbar-fixed-top");
        }
    });
    $("#top").click(function(){
         $("html, body").animate({
            scrollTop: 638
        }, 600);
        return false;
    });    
});