/**
 * Created by Administrator on 2017/4/12.
 */
var Audio_btn=document.getElementById("audio_btn");
var Music=document.getElementById("music");
var a=1;
Audio_btn.onclick=function () {
    a=a==1?0:1;
    if (a==0){
        Music.pause();
        Audio_btn.style.animation="none";
        Audio_btn.style.webkitAnimation="none";
        Audio_btn.style.mozAnimation="none";
        Audio_btn.style.msAnimation="none";
        Audio_btn.style.oAnimation="none";
    }else {
        Music.play();
        Audio_btn.style.animation="revolve 1s linear infinite";
        Audio_btn.style.webkitAnimation="revolve 1s linear infinite";
        Audio_btn.style.mozAnimation="revolve 1s linear infinite";
        Audio_btn.style.msAnimation="revolve 1s linear infinite";
        Audio_btn.style.oAnimation="revolve 1s linear infinite";
    }



}
