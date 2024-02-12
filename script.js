$('.share-button').click(
    function() {
        $('#hover-div').fadeToggle();
    }
)

$('.share-button').mouseenter(
    function() {
        $(this).css('background-color', 'hsl(217, 19%, 35%)');
        $('path').attr('fill', '#ffffff');
    }
)

$('.share-button').mouseleave(
    function() {
        $(this).css('background-color', 'hsl(210, 46%, 95%)')
        $('path').attr('fill', '#6E8098');
    }
)