/**
 * Created by max on 2016/2/28.
 */

var lastID = null;

$(function(){
    $(".spot").click(function(){
            var ID = (this.id).slice(5);
            if(lastID == ID){
                lastID == null;
                document.location.href="city/" + ID + ".html";
            }else{
                $("#background-two").fadeOut(1000, function(){
                    $("#background-two").css("background-image","url('city/image/" + ID + "/main-night.jpg')");
                    $("#background-two").fadeIn(1000, function(){
                        $("#background-one").css("background","center center fixed");
                        $("#background-one").css("background-repeat","no-repeat");
                        $("#background-one").css("background-size","cover");
                        $("#background-one").css("background-image","url('city/image/" + lastID + "/main-night.jpg')");
                    });
                });
                $("#background-two").css("background","center center fixed");
                $("#background-two").css("background-repeat","no-repeat");
                $("#background-two").css("background-size","cover");

                lastID = ID;
            }
        }
    );
});