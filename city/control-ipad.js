/**
 * Created by max on 2016/2/29.
 */

var one = -1, two = -1, three = -1, four = -1, five = -1;

$(function(){
    $(".secret-h").click(function(){
        var ID = (this.id).slice(2);
        var boxID = "box-"+(this.id).slice(2);
        var pID = "p-"+(this.id).slice(2);

        if(ID=="one"){ one = one*(-1); }
        else if(ID=="two"){ two = two*(-1); }
        else if(ID=="three"){ three = three*(-1); }
        else if(ID=="four"){ four = four*(-1); }
        else if(ID=="five"){ five = five*(-1); }

        if($("#"+boxID).height() < $(document).width()*0.2) {
            $("#" + boxID).css("height", "22vw");
            $("#" + pID).css("display", "block");
        }else{
            $("#" + boxID).css("height", "8vw");
            $("#" + pID).css("display", "none");
        }

        if((one>0||two>0||three>0)&&(four>0||five>0)){
            $(".secret-col-two").css("margin-top", "36vw");
            $(".history").css("margin-top", "28vw");
        }else if((one>0||two>0||three>0)&&(four<0||five<0)){
            $(".secret-col-two").css("margin-top", "36vw");
            $(".history").css("margin-top", "15vw");
        }else if((one<0||two<0||three<0)&&(four>0||five>0)){
            $(".secret-col-two").css("margin-top", "23vw");
            $(".history").css("margin-top", "15vw");
        }else{
            $(".secret-col-two").css("margin-top", "23vw");
            $(".history").css("margin-top", "0vw");
        }

    });
});