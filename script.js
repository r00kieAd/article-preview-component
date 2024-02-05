$('.shareDiv').click(
    function(){
        $('#hoverShare').fadeToggle("slow");
    }
)

$('.shareDiv').hover(
    function() {
        $(this).find('path').attr('fill', '#ffffff');
    },
    function() {
        $(this).find('path').attr('fill', '#6E8098');
    }
)