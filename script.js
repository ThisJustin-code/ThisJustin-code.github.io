$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 30){
            $('.navbar').addClass("sticky")
            $('.navbar .logo a span').addClass("sticky")
        }else{
            $('.navbar').removeClass("sticky")
            $('.navbar .logo a span').removeClass("sticky")
        }
    });

    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});