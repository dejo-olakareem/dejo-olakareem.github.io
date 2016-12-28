$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  toggle()
});


var toggle = function(){
	$(".img-responsive, .name").mouseenter(function(e){
		e.preventDefault()
		$(this).siblings('p').slideDown("slow");
		console.log("you")
	})
	$(".img-responsive, .name").mouseleave(function(e){
		e.preventDefault()
		$(this).siblings('p').slideUp("slow")
		console.log("you")
	})
}