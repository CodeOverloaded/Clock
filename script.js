$(document).ready(function(){
    setInterval("updateClock()", 1000)
})

function updateClock(){
    var currentTime = new Date();
    var time = currentTime.toString();

    $("#clock").html(time);
}
