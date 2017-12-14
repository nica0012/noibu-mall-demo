$(document).ready(function () {
    //change the integers below to match the height of your upper dive, which I called
    //banner.  Just add a 1 to the last number.  console.log($(window).scrollTop())
    //to figure out what the scroll position is when exactly you want to fix the nav
    //bar or div or whatever.  I stuck in the console.log for you.  Just remove when
    //you know the position.
    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the 
        //nav bar to stick.  
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 399) {
            $('#navbar').addClass('navbar-fixed');
            $('header').css("margin-top", "80px");

        }
        if ($(window).scrollTop() < 400) {
            $('#navbar').removeClass('navbar-fixed');
            $('header').css("margin-top", "0");

        }
    });
});
