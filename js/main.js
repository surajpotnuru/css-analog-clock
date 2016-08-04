$(document).ready(function(){
    var time,minutes,hours,seconds;
    setInterval(function(){
        time  = new Date();
        hours = time.getHours()%12;
        minutes = time.getMinutes();
        seconds = time.getSeconds();
        $("#hours").html(hours);
        $("#minutes").html(minutes);
        $("#seconds").html(seconds);
        $("#hours-needle").css("transform","rotate("+ (hours*30+90)+"deg)");
        $("#minutes-needle").css("transform","rotate("+ (minutes*6+90)+"deg)");
        $("#seconds-needle").css("transform","rotate("+ (seconds*6+90)+"deg)");
    },1000);
});