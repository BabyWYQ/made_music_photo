/**
 * Created by Administrator on 2017/4/11.
 */
var skin1=document.getElementById("skin1");
var skin2=document.getElementById("skin2");
var oSkin=document.getElementById("skin");
var oSkin_ic=document.getElementById("skin_ic");
var oSkin_icon=document.getElementById("skin_icon");
oSkin_icon.addEventListener("click",function () {
    oSkin_ic.style.display="block";
},true);
skin1.addEventListener("click",function () {
    oSkin.href="../css/skin1.css";
    oSkin_ic.style.display="none";
},false);
skin2.addEventListener("click",function () {
    oSkin.href="../css/skin2.css";
    oSkin_ic.style.display="none";
},false);

