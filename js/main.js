// $(document).ready(function () { 
// 	$('.button').click(function(){
//         $(this).toggleClass("hover");
//     });
// 	});


$.ajax({
	url: 'https://www.kickstarter.com/projects/portefino/portefini-the-everyday-blazer-for-all-occasions-an',
	type: 'GET',
	success: function(res) {
		var data = $.parseHTML(res);  //<----try with $.parseHTML().
		$(data).find('div.js-pledged').each(function(){
			$('.total-pledged').append($(this).html());
		});

		$('body').toggleClass('loaded');
	}
 });