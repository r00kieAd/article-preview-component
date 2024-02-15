

$('.share-button').click(
    function () {
        if (screen.width <= 900) {
            $('#profile-info').toggleClass('hide-profile');
            $('#mobile-hover-div-container').toggle();
        } else {
            $('#hover-div').fadeToggle();
        }
    }
)

if (screen.width > 900) {


    $('.share-button').mouseenter(
        function () {
            $(this).css('background-color', 'hsl(217, 19%, 35%)');
            $('path').attr('fill', '#ffffff');
        }
    )

    $('.share-button').mouseleave(
        function () {
            $(this).css('background-color', 'hsl(210, 46%, 95%)')
            $('path').attr('fill', '#6E8098');
        }
    )

}