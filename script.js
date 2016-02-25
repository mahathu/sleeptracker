var weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var height = 340;

$(function () {

    for(var i=0; i<7; i++){
        var html = '\
        <span class="day-box-wrapper">\
        <span class="day-box">\
        </span>\
        <div class="name">'+weekdays[i]+'</div>\
        </span>\
        ';
        $(".view-content").append(html);
    }

    $(".view-week .day-box-wrapper:last-child").css('margin-right', 0); //doesnt work in CSS smh

    for(var i=1; i<8; i++){
        var wakeTime = Math.floor((Math.random() * 4) + 1)+4;
        var sleepTime = Math.floor((Math.random() * 8) + 1)+20;

        addWakeTime(i, wakeTime, sleepTime);
    }

});

function addWakeTime(index, wakeTime, sleepTime){

    var e = $("<span class='awake-time'></span>");    

    console.log("woke up at "+wakeTime+":00");
    console.log("went to bed at "+sleepTime+":00");

    var marginTop = (wakeTime-4)/24*height;
    var delta = sleepTime-wakeTime;
    var divHeight = delta/24*height;

    e.css('top', marginTop+'px');
    e.css('height', divHeight+'px');

    $(".day-box-wrapper:nth-of-type("+index+") .day-box").append(e);
}