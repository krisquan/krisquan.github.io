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
        $('#email-form').select();
    });

	// form signup
	$('#mc_embed_signup').find('form').ajaxChimp({
		callback: function(response) {
			console.log(response);
			var message = "";

			if (response.result === "success")
			{
				message = "Success! Check your inbox for a verification email.";
			}
			else 
			{
				message = "Error " + response.msg;
			}
      		$('form label').text(message);
      	}
    });

    // intialize video popup
    $('.teaser').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,

          fixedContentPos: false
      });


	// kickstarter stats animation
    kickstarter();

});

function kickstarter() {
    var amountPledged = 500;
    var goal = 9000;
    var backers = 67;

    var percentPledgedInt = amountPledged / goal * 100;
    percentPledgedInt = Math.floor(percentPledgedInt);
    var percentPledgedString = percentPledgedInt.toString();
    console.log(percentPledgedString);

    $('.progress-meter').animate({
        width: percentPledgedString + "%"
    }, 3000);

    $('.amount-pledged').animateNumber({
        number: amountPledged,
    }, 3000);

    var percent_number_step = $.animateNumber.numberStepFactories.append('%');
    $('.percent-funded').animateNumber({
        number: percentPledgedInt,
        numberStep: percent_number_step
    }, 3000);

    $('.num-backers').animateNumber({
        number: backers
    }, 3000);
}


// // utility function to see if element is in viewport
// function isScrolledIntoView(elem) {
//     var docViewTop = $(window).scrollTop();
//     var docViewBottom = docViewTop + $(window).height();

//     var elemTop = $(elem).offset().top;
//     var elemBottom = elemTop + $(elem).height();

//     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }


