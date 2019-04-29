$(function(){
    
    var flyt = 30;
    var left = 500;
    li_     = $('#navbar li');
    li_.css('position','absolute');
    
    li_.each(function(index, Element) {
        $(Element)
        .css('top',flyt)
        .css('left',left)
        .delay(index*300)
        .queue(function() {
            gogo (Element);
        });
        flyt=flyt+60;
    });
    function gogo(Element) {
        $(Element).animate(
        {left: 30}, {queue:false,duration:400, easing:'swing'}
        )
    }
})



//    til video
$(function(){
var vid = document.getElementById("IMG_0809.mp4");

function enablePreload() { 
  vid.preload = "auto";
} 

function enableMute() { 
  vid.muted = true;
} 

function enableLoop() { 
  vid.loop = true;
  vid.load();
} 
})