/**
 * Created by Administrator on 2017/4/11.
 */
//链接的样式  换肤用的
var oSkin=document.getElementById("skin");
//换肤的图标
var oSkin_icon=document.getElementById("skin_icon");
//点击换肤出现的皮肤样式
var oSkin_ic=document.getElementById("skin_ic");
//皮肤样式1
var skin1=document.getElementById("skin1");
//皮肤样式2
var skin2=document.getElementById("skin2");
//让皮肤图标出现
oSkin_icon.addEventListener("click",function () {
    oSkin_ic.style.display="block";
},true);
//换肤的同时皮肤图标消失
skin1.addEventListener("click",function () {
    oSkin.href="../css/skin1.css";
    oSkin_ic.style.display="none";
},false);
skin2.addEventListener("click",function () {
    oSkin.href="../css/skin2.css";
    oSkin_ic.style.display="none";
},false);

