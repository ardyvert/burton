//code to style web page elements
$(document).ready(function (){
$("#h2").css("font-size","30px");
$("#h2").css("color","purple");
$("#d1").css("background","grey");
$("#a1").css("background","purple");
$("#a1").css("color","green");
$("#p1").css("color","purple");
$("#p2").css("color","green");
$("#p2").css("font-size","8px");
$("#dd1").css("background","grey");
$("#aa1").css("background","purple");
$("#aa1").css("color","green");
$("#hh2").css("color","purple");
$("#hh2").css("font-size","30px");
$("#pp1").css("color","purple");
$("#pp2").css("color","green");
$("#pp2").css("font-size","8px");
$("#b1,#b2,#b3,#b4").css("background","green");
$("#b1,#b2,#b3,#b4").css("color","purple");
});
//code to set image element src attribute value
$(document).ready(function (){
$("#img").attr("src","Burton.jpg");
});
//code to link to external sites
function red1(){
alert("You are being taken to view Ardyapp");
window.location="https:\/\/ardyvert.github.io/ardyapp/";
}
function red2(){
alert("You are being taken to view MathWizz");
window.location="https:\/\/ardyvert.github.io/mathwizz/";
}
function red3(){
alert("You are being taken to view Ardylearn");
window.location="https:\/\/ardyvert.github.io/ardylearn/";
}
function red4(){
alert("You are being taken to view Ardy");
window.location="https:\/\/ardyvert.github.io";
}