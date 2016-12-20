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
    $.ajax({
    url: 'https://www.kickstarter.com/projects/portefino/portefini-the-everyday-blazer-for-all-occasions-an',
    type: 'GET',
    success: function(res) {
        var data = $.parseHTML(res);  //<----try with $.parseHTML().
        $(data).find('div.js-pledged').each(function(){
            $('.amount-pledged').append($(this).html());
        });

        $(data).find('div.')

        $('body').toggleClass('loaded');
    }
    });
}

