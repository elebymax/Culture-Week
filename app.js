/**
 * Created by max on 2015/12/29.
 */

var arrCity = ["newtaipei", "taoyuan", "chumiao",
    "taichung", "nantou", "changhua",
    "yunlin", "chiayi", "tainan",
    "together", "kaohsiung", "pingtung",
    "huatung", "ilan", "keelung",
    "penghu", "kinmen"];

if(/iPad|iPhone|iPod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent)) {
    $(".spot").css("background-size","40px");
    $("#bigmap").css("width","90vw");
    $("#background-one").css("height","100%");
    $("#background-two").css("height","100%");
    document.write('<script src="ipad.js"></script>');
}else{
    document.write('<script src="pc.js"></script>');
}

function getMapWH() {
    var t = document.getElementById('bigmap');
    var valueH = [0.15, 0.12, 0.22,
        0.33, 0.44, 0.4,
        0.47, 0.535, 0.62,
        0.65, 0.73, 0.78,
        0.61, 0.25, 0.09,
        0.5, 0.28];
    var valueW = [0.82, 0.7, 0.63,
        0.5, 0.6, 0.44,
        0.4, 0.38, 0.39,
        0.32, 0.39, 0.48,
        0.68, 0.83, 0.87,
        0.13, 0.23];

    for(var i=0;i<17;i++){
        setPosition(t, arrCity[i], valueH[i], valueW[i]);
    }
}

function setPosition(t, arrCity, valueH, valueW){
    var pos = document.getElementById('spot-'+arrCity);
    pos.style.top = (-13)+t.offsetTop+t.height*valueH+"px";
    pos.style.left = (-13)+t.offsetLeft+t.width*valueW+"px";
}

var images = new Array();

function preload() {
    for (i = 0; i < 17; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

preload(
    '/city/image/newtaipei/main-night.jpg',
    '/city/image/taoyuan/main-night.jpg',
    '/city/image/chumiao/main-night.jpg',
    '/city/image/taichung/main-night.jpg',
    '/city/image/nantou/main-night.jpg',
    '/city/image/changhua/main-night.jpg',
    '/city/image/yunlin/main-night.jpg',
    '/city/image/chiayi/main-night.jpg',
    '/city/image/tainan/main-night.jpg',
    '/city/image/together/main-night.jpg',
    '/city/image/kaohsiung/main-night.jpg',
    '/city/image/pingtung/main-night.jpg',
    '/city/image/huatung/main-night.jpg',
    '/city/image/ilan/main-night.jpg',
    '/city/image/keelung/main-night.jpg',
    '/city/image/penghu/main-night.jpg',
    '/city/image/kinmen/main-night.jpg'
);