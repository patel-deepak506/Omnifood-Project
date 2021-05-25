$(document).ready(function(){
    // this is for sticky nav
    var waypoint = new Waypoint({
        element: $('.js-section-features'),
        handler: function(direction) {
          console.log('now u r scrolling ',direction)
          if (direction=="down"){
              $('nav').addClass("sticky");
          }else{
              $('nav').removeClass("sticky")
          }
        },
        offset:"60px"
      })

      // Scroll on bottons

    // $('.js-scroll-to-plans').click(function () {
    //     console.log("This is scroll j");
    //     $('html,body').animate({scrollTop: $('js-section-features')})
    // })

    $('.js-scroll-to-plans').click(function(){
        console.log("this is very good");
        $('html,body').animate({scrollTop:$('.js-section-plans').offset().top},800)
       
    });

        $('.js-scroll-to-start').click(function(){
        console.log("this is very good");
        $('html,body').animate({scrollTop:$('.js-section-features').offset().top},800)
       
    });

    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              },1000);
              return false;
            }
          }
        });
      });

});