var captionLength = 0;
var caption = '';


$(document).ready(function() {
    setInterval ('cursorAnimation()', 600);
    captionEl = $('#caption');
    
    firstTypingEffect();
    
    $('#test-typing').click(function(){
        testTypingEffect();
    });

    $('#test-erasing').click(function(){
        testErasingEffect();
    });
});

function testTypingEffect() {
    caption = $('input#user-caption').val();
    type();
}
function firstTypingEffect() {
    caption = "Open Source, Open Mind!";
    type();
}

function type() {
    captionEl.html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1) {
        setTimeout('type()', 80);
    } else {
        captionLength = 0;
        caption = '';
    }
}

function testErasingEffect() {
    caption = captionEl.html();
    captionLength = caption.length;
    if (captionLength>0) {
        erase();
    } else {
        $('#caption').html("You didn't write anything to erase, but that's ok!");
        setTimeout('testErasingEffect()', 1000);
    }
}

function erase() {
    captionEl.html(caption.substr(0, captionLength--));
    if(captionLength >= 0) {
        setTimeout('erase()', 50);
    } else {
        captionLength = 0;
        caption = '';
    }	
}

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}