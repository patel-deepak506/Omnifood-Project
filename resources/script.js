$(document).ready(function(){
    // this is for sticky nav
    var waypoint = new Waypoint({
        element: $('.js-section-features'),
        handler: function(direction) {
          if (direction=="down"){
              $('nav').addClass("sticky");
          }else{
              $('nav').removeClass("sticky")
          }
        },
        offset:"60px"
      })

      // Scroll on bottons



    $('.js-scroll-to-plans').click(function(){
        // console.log("this is very good");
        $('html,body').animate({scrollTop:$('.js-section-plans').offset().top},800)
       
    });

        $('.js-scroll-to-start').click(function(){
        console.log("this is very good");
        $('html,body').animate({scrollTop:$('.js-section-features').offset().top},800)
       
    });

    //  Navigation Scroll

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

      // Animaton Scroll
      console.log("First animation");
      $('.js-wp-1').waypoint(function(direction) {
        $('.js-wp-1').addClass('animated fadeIn')
      } , {
        offset:'50%'
      })
      console.log("Moblie animation");
      $('.js-wp-2').waypoint(function(direction) {
        $('.js-wp-2').addClass('animated fadeInUp')
      } , {
        offset:'50%'
      })
      console.log("City animation");
      $('.js-wp-3').waypoint(function(direction) {
        $('.js-wp-3').addClass('animated fadeIn')
      } , {
        offset:'50%'
      })
      console.log("Four  animation");
      $('.js-wp-4').waypoint(function(direction) {
        $('.js-wp-4').addClass('animated pulse')
      } , {
        offset:'50%'
      })


      // Mobile Nav

      $('.js-nav-icon ').click(function () {
        var nav = $('.js-main-nav');
        var icon = $('.js-nav-icon i');
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')){
          icon.addClass('ion-close-round')
          icon.removeClass('ion-navicon-round')
        }else{
          icon.addClass('ion-navicon-round')
          icon.removeClass('ion-close-round')
        }
      });
});