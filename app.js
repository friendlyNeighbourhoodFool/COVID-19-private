 $(function(){
      $(document).scroll(function(){
      var $nav=$("#mainNavbar");
       $nav.toggleClass("scrolled",$(this).scrollTop()>$nav.height());
    });
});




//check off specific todo by clicking
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

//click on X to delete
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which===13){
		var todotext=$(this).val();
		$("#g").append("<li id='li'><span id='sp'><i class='fa fa-trash'></i> </span>"+todotext+"</li>");
		$(this).val(" ");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
});
