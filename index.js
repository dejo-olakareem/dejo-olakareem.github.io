$( document ).ready(function() {
    console.log( "ready!" );
    $(".nav-link").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
  });
});



