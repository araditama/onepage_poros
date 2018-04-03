var captionLength = 0;
var caption = '';
var count = 0;


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
    $('#a-intro').click(function(){
        if(count == 0){
            count = 1;
            testErasingEffect();
            setTimeout(function(){
                caption = "Open Source, Open Mind!";
                type();
                count = 0;
            }, 1400);  
        }
        
    });
    $('#a-internal').click(function(){
        if(count == 0){
            count = 1;
            testErasingEffect();
            setTimeout(function(){
                caption = "We are Caring !";
                type();
                count = 0;
            }, 1400);  
        }
        
    });
    $('#a-humas').click(function(){
        if(count == 0){
            count = 1;
            testErasingEffect();
            setTimeout(function(){
                caption = "We are Sharing !";
                type();
                count = 0;
            }, 1400);  
        }
        
    });
    $('#a-litbang').click(function(){
        if(count == 0){
            count = 1;
            testErasingEffect();
            setTimeout(function(){
                caption = "We are Developing !";
                type();
                count = 0;
            }, 1400);  
        }
        
    });
    // $('#a-intro').click(function(){
    //     caption = "Open Source, Open Mind!";
    //     type();
        
    // });
    // $('#a-internal').click(function(){
    //     caption = "We are Caring !";
    //     type();

    // });
    // $('#a-humas').click(function(){
    //     caption = "We are Sharing !";
    //     type();   
    // });
    // $('#a-litbang').click(function(){
    //     caption = "We are Developing !";
    //     type();
    // });
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
        setTimeout('testErasingEffect()', 1000);
    }
}


function erase() {
    captionEl.html(caption.substr(0, captionLength--));
    if(captionLength >= 0) {
        setTimeout('erase()', 40);
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