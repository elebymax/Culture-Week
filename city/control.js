/**
 * Created by max on 2016/2/20.
 */

if(/iPad/i.test(navigator.userAgent)) {
    document.write('<script src="control-ipad.js"></script>');
}else{
    document.write('<script src="control-pc.js"></script>');
}

$(function(){
    $(".goDiv").click(function(){
        var divID = (this.id).slice(2);
        $("html,body").animate({scrollTop: $("."+divID).offset().top-99}, 1000);
        return false;
    });
});

$(document).ready(function(){
    var docw = $(document).width()*0.69;
    $("#right").click(function(){
        $("#gallery").animate({
            scrollLeft: $("#gallery").scrollLeft() + docw
        }, 1000,function(){});
    });
    $("#left").click(function(){
        $("#gallery").animate({
            scrollLeft: $("#gallery").scrollLeft() - docw
        }, 1000,function(){});
    });
});