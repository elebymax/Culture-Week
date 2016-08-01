/**
 * Created by max on 2016/2/28.
 */

$(function(){
    //當滑鼠滑入時將div的class換成divOver
    $(".spot").hover(function(){
            //on
            var ID = (this.id).slice(5);
            $("#background-one").css("background","center center fixed");
            $("#background-one").css("background-image","url('city/image/" + ID + "/main-night.jpg')");
            $("#background-one").css("background-repeat","no-repeat");
            $("#background-one").css("background-size","cover");
            $("#background-two").stop().animate({opacity: '0'},500);
        },function(){
            //off
            $("#background-two").stop().animate({opacity: '1'},500);
        }
    );
    $(".spot").click(function(){
        document.location.href="city/" + (this.id).slice(5) + ".html";
    });

});