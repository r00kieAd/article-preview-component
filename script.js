$('.shareDiv').click(
    function(){
        $('#hoverShare').fadeToggle("slow");
        $('#arrow').addClass("visibleArrow");
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