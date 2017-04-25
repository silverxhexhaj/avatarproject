

$(document).ready(function(){

	$('#fullpage').fullpage({
      sectionsColor: ['#1abc9c', '#16a085', '#f1c40f', '#f39c12', '#e74c3c', '#c0392b', '#3498db', '#2980b9', '#34495e'],
      anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', '6thpage', '7thpage', '8thpage' ,'lastPage'],
      menu: '#menu',
    });









	

	$("#open-menu-btn").click(function(){
		$(".menu-inner").addClass("menu-inner-active");
	});

	$("#close-menu").click(function(){
		$(".menu-inner").removeClass("menu-inner-active");
	});


	$(".agebutton").click(function(){
		$(".overlayavatar").addClass("overlayavatar-hide");
	});



	$(".overlayavatar").hover(function(){
		$(".overlayavatar h1").toggleClass("shake");
	});




	$("#close-home").click(function(){
		$("#about").addClass("about-hide");
		$("#avatars").addClass("avatars-hide");
		// $("#fullpage").css({
		// 	"transform": "translate(0%)"
		// });
		$("#menu").addClass("menu-open");
	});



	// $(".item-01").click(function(){
	// 	$("#about").addClass("about-hide");
	// 	$("#avatars").addClass("avatars-hide");

	// 	setTimeout(function(){
	// 		$(".item-01-wrapper").addClass("item-01-wrapper-open");
	// 	}, 200);
	// });





	/* FORM */
	
	//material contact form animation
	$('.contact-form').find('.form-control').each(function() {
	  var targetItem = $(this).parent();
	  if ($(this).val()) {
	    $(targetItem).find('label').css({
	      'top': '10px',
	      'fontSize': '14px'
	    });
	  }
	})
	$('.contact-form').find('.form-control').focus(function() {
	  $(this).parent('.input-block').addClass('focus');
	  $(this).parent().find('label').animate({
	    'top': '10px',
	    'fontSize': '14px'
	  }, 300);
	})
	$('.contact-form').find('.form-control').blur(function() {
	  if ($(this).val().length == 0) {
	    $(this).parent('.input-block').removeClass('focus');
	    $(this).parent().find('label').animate({
	      'top': '25px',
	      'fontSize': '18px'
	    }, 300);
	  }
	})



});



// $(document).ready(function(){

// 	//----------------------
// 	//PROJECTS FUNCTIONALITY
// 	//----------------------



// 	$("#p1").click(function(){
// 		$("#content-flex").addClass("animated fadeOutRight");
// 		$("#navbar-flex").addClass("navbarflex-hide");
// 		$("#content-flex").css({
// 			"display": "none",
// 			"opacity": "0"
// 		});
// 		$("#items-flex").css({
// 			"flex-basis": "90%",
// 			"transition": "all 0.7s"
// 		});
// 		$(".item-1").css({
// 			"flex-grow": "15",
// 			"background-color": "white",
// 			"overflow-y": "scroll",
// 			"transition": "all 0.8s"

// 		});
// 		$(".content-item1").delay(800).fadeIn(500);
// 	});
