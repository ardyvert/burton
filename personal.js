//code to style web page elements
$(document).ready(function (){
$("#h2").css({"font-size":"30px","color":"purple"
});
$("#d1").css("background","grey");
$("#a1").css({"background":"purple","color":"green"
});
$("#p1").css({"color":"black","font-size":"12px","margin-left":"2%","margin-right":"2%"
});
$("#p2").css({"color":"green","font-size":"8px"
});
$("#h3").css({"color":"purple","position":"relative","left":"95px"
});
$("#b1,#b2,#b3,#b4").css({"color":"purple","background":"green"
});
$("#img").css({"margin-left":"2%","margin-right":"2%"
});
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