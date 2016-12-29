$('#email-form').keypress(function (e) {
	if (e.which == 13) {
		$('#submit').click();
	}
});


$(document).ready(function() {
	// clicking button at top of page jumps to email signup
	$('.jump').click(function() {
		$('html, body').animate({
			scrollTop: $('.email-row').offset().top
		}, 500);
		$('.email').select();
	});

	// form signup
	$('.subscribe-wrapper').find('form').ajaxChimp({
		callback: function(response) {
			if (response.result === "success") {
				var message = "You're almost there! Check your inbox for a verification email.";
				
				// add thank you message, replacing the form
				$('.mailing-list').hide();
				$('.subscribe-form').hide();
				$('.error-message').hide();
				$('.thank-you').addClass('#thank-you');
				$('#thank-you').append(message);
			}
			else {
				shakeBoxAndReset($('.email'));
				switch(response.msg.slice(-3))
				{
					case 'lue':
						$('.error-message').text("Please enter a value");
						break;
					case 'e @':
						$('.error-message').text("Your email address needs an @");
						break;
					case 'ed.':
						$('.error-message').text("Your email address doesn't go anywhere");
						break;
					case '/a>':
						$('.error-message').text("You have already subscribed");
						break;							
					default:
						$('.error-message').text("Your email address is missing something");
						break;			
				}
			}
		}
	});

	$('.mailing-list').click(function() {
		$('.email').select();
	});

	// intialize video popup
	$('.teaser').magnificPopup({
		disableOn: 0,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		fixedContentPos: false
	  });


	// kickstarter stats animation
	kickstarter();

});

function kickstarter() {
	var amountPledged = 5000;
	var goal = 9000;
	var backers = 67;

	var percentPledgedInt = amountPledged / goal * 100;
	percentPledgedInt = Math.floor(percentPledgedInt);
	var percentPledgedString = percentPledgedInt.toString();

	$('.progress-bar-completed').animate({
		width: percentPledgedString + "%"
	}, 2500);

	$('.amount-pledged .2').animateNumber({
		number: amountPledged
	}, 3000);

	var percentageSign = $.animateNumber.numberStepFactories.append('%');
	$('.percent-funded').animateNumber({
		number: percentPledgedInt,
		numberStep: percentageSign
	}, 3000);

	$('.num-backers').animateNumber({
		number: backers
	}, 3000);
}

function shakeBoxAndReset(box) {
	var l = $(window).width() / 500;
	for(var i = 0; i < 9; i++) {
		box.animate( {
			'margin-left': "+=" + ( l = -l ) + 'px',
			'margin-right': "-=" + l + 'px'
		}, 50);
	}

	box.animate( {
		'margin-left': "+=" + ( l = -l ) + 'px',
		'margin-right': "-=" + l + 'px'
	}, 50, function() {
		box.select();
	});
}

// // utility function to see if element is in viewport
// function isScrolledIntoView(elem) {
//     var docViewTop = $(window).scrollTop();
//     var docViewBottom = docViewTop + $(window).height();

//     var elemTop = $(elem).offset().top;
//     var elemBottom = elemTop + $(elem).height();

//     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }


