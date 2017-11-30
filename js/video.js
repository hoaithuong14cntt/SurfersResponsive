var myVideo = document.getElementById("video"); 

$("video, .play-button").click(function() {
    var video = $("#video").get(0);
    if ( video.paused ) {
        video.play();
        $(".play-button").hide();
    } else {
        video.pause();
        $(".play-button").show();
    }

    return false;
});


function makeBig() { 
    myVideo.width = 560; 
} 

function makeSmall() { 
    myVideo.width = 320; 
} 

function makeNormal() { 
    myVideo.width = 420; 
} 