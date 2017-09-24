jQuery(document).ready(function($){
    var progressBars = $('.progress-bar'),
		/*** here is where you change the point where the animation starts*/
        offset = 0.95;

    $(function () { 
        $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
    });
    
    $(window).on('scroll', function(){
        (!window.requestAnimationFrame) 
		  ? setTimeout(function(){ showBars(progressBars, offset); }, 100)
		  : window.requestAnimationFrame(function(){ showBars(progressBars, offset); });
    });
    
    function showBars(bars, offset) {
		bars.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset ) && 
                showBar($(this));
		});
	}
    
    function showBar(bar) {
        bar_width = bar.attr('aria-valuenow');
        bar.width(bar_width + '%');
    }
});