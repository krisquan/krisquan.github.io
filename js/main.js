var button = $('#submit');

$('#email-form').keypress(function (e) {
  if (e.which == 13) {
    $('#submit').click();
  }
});

button.on('click', function(e) {
	e.preventDefault();

	// reset to submit state
	if (button.hasClass('submitted')) {
		button.removeClass('clicked');
		button.removeClass('submitted');
		button.off('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd');
	}

	// animate submit
	else {
		setTimeout(function(){
			button.addClass('clicked');
		}, 500);

		button.on('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(){
			$(this).addClass('submitted');
		});
	}
});


// $(document).ready(function() {
//     kickstarter();
//     venobox();

//     $('.jump').click(function() {
//         console.log('hi');
//         $('html, body').animate({
//             scrollTop: $('.email-row').offset().top
//         }, 500);
//         $('#email-form').select();
       
//     });

//     $('.button').click(function() {
//         var email = $('.email-form').val();
//         if (validateEmail(email))
//         {
//             // TODO: display success 
//         }
//         else 
//         {
//             // TODO: display error
//         }
//     });
// });

// function venobox() {
//     /* default settings */
//     $('.venobox').venobox(); 


//     var w = Math.floor( $( window ).width() / 1.5);
//     var h = Math.floor( $( window ).height() / 1.5);

//     w = JSON.stringify(w);
//     h = JSON.stringify(h);

//     /* custom settings */
//     $('.venobox_custom').venobox({
//         framewidth: w,              // default: ''
//         frameheight: h,             // default: ''
//         bgcolor: '#000',         // default: '#fff'
//         titleattr: 'data-title',    // default: 'title'
//         numeratio: true,            // default: false
//         infinigall: true            // default: false
//     });
// }

// function kickstarter() {
//     var amountPledged = 500;
//     var goal = 9000;
//     var backers = 67;

//     var percentPledgedInt = amountPledged / goal * 100;
//     percentPledgedInt = Math.floor(percentPledgedInt);
//     var percentPledgedString = percentPledgedInt.toString();
//     console.log(percentPledgedString);



//     $('.progress-meter').animate({
//         width: percentPledgedString + "%"
//     }, 3000);

//     $('.amount-pledged').animateNumber({
//         number: amountPledged,
//     }, 3000);

//     var percent_number_step = $.animateNumber.numberStepFactories.append('%');
//     $('.percent-funded').animateNumber({
//         number: percentPledgedInt,
//         numberStep: percent_number_step
//     }, 3000);

//     $('.num-backers').animateNumber({
//         number: backers
//     }, 3000);
// }

// function validateEmail(email) {
//   var re = /\S+@\S+/;
//   return re.test(email);
// }

// function validate() {
//   $("#result").text("");
//   var email = $("#email").val();
//   if (validateEmail(email)) {
//     $("#result").text(email + " is valid :)");
//     $("#result").css("color", "green");
//   } else {
//     $("#result").text(email + " is not valid :(");
//     $("#result").css("color", "red");
//   }
//   return false;
// }

// $("#validate").bind("click", validate);


// // utility function to see if element is in viewport
// function isScrolledIntoView(elem) {
//     var docViewTop = $(window).scrollTop();
//     var docViewBottom = docViewTop + $(window).height();

//     var elemTop = $(elem).offset().top;
//     var elemBottom = elemTop + $(elem).height();

//     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }


