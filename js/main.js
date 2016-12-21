$(document).ready(function(){
    kickstarter();
    venobox();
});

function venobox() {
    /* default settings */
    $('.venobox').venobox(); 


    var w = Math.floor( $( window ).width() / 1.5);
    var h = Math.floor( $( window ).height() / 1.5);

    w = JSON.stringify(w);
    h = JSON.stringify(h);

    /* custom settings */
    $('.venobox_custom').venobox({
        framewidth: w,              // default: ''
        frameheight: h,             // default: ''
        bgcolor: '#000',         // default: '#fff'
        titleattr: 'data-title',    // default: 'title'
        numeratio: true,            // default: false
        infinigall: true            // default: false
    });
}

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
    }, 1500);

    $('.amount-pledged').animateNumber({
        number: amountPledged
    }, 1500);

    $('.percent-funded').animateNumber({
        number: percentPledgedInt
    }, 1500);

    $('.num-backers').animateNumber({
        number: backers
    }, 1500);
}


// // utility function to see if element is in viewport
// function isScrolledIntoView(elem) {
//     var docViewTop = $(window).scrollTop();
//     var docViewBottom = docViewTop + $(window).height();

//     var elemTop = $(elem).offset().top;
//     var elemBottom = elemTop + $(elem).height();

//     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }


    // $.ajax({
    // url: 'https://www.kickstarter.com/projects/portefino/portefini-the-everyday-blazer-for-all-occasions-an',
    // type: 'GET',
    // success: function(res) {
    //     var data = $.parseHTML(res);  //<----try with $.parseHTML().
    //     $(data).find('div.js-pledged').each(function(){
    //         $('.amount-pledged').append($(this).html());
    //     });
    // }
    // });


