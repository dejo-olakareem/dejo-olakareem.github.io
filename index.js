$( document ).ready(function() {
    console.log( "ready!" );
    $(".nav-link").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
  });
});

$( document ).ready(function() {
    // $('.carousel').carousel({
    //   interval: 2000
    // });

    $('.customer-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
          pauseOnHover: false,
          responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: 520,
          settings: {
            slidesToShow: 2
          }
        }]
      });
    //NAvigate between two navs
    $(window).scroll(function() {
        // $('.my-hidden-nav').hide();
      if ($(this).scrollTop()>650)
       {
          $('.my-hidden-nav').show();
       }
      else
       {
        $('.my-hidden-nav').hide();
       }
    });

    //Scroll to id wanted
    $(".nav-link").click(function(e) {
      e.preventDefault();
      var aid = $(this).attr("href");
      $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
    });

    // Modal
    $('#myModal').modal(options)
});








