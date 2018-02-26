$(document).ready(function() {
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Home', 'About', 'Product', 'Contact']
    });
    $('#moveToTop').click(function(e){
        e.preventDefault();
        $.fn.fullpage.moveTo(1, 0);
    });
    
});