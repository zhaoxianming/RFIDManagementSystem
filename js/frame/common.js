// ie8隔行变色
//$(".tablelist tr:odd").css("background", "rgb(245, 245, 245)");
$(".tablelist tr:odd").css("background", "rgb(235, 245, 255)");
$(".tablelist tr:even").css("background", "rgb(255, 255, 255)");

$(function(){
	// ----------- 弹出框样式设置 ------------
	window.alert = function alert(e){
    	$("body").append('<div id="msg_mask"></div><div id="msg"><div id="msg_top"><img id="msg_img" src="../../img/button/hint1.png" />提示信息<span class="msg_close">×</span></div><div id="msg_cont">'+e+'</div><div class="msg_close msg_btn" id="msg_clear">确定</div></div>');
    	$(".msg_close").click(function (){
        	$("#msg").remove();
        	$("#msg_mask").remove();
        });
    }
	window.confirm = function confirm(e){
    	$("body").append('<div id="msg_mask"></div><div id="msg"><div id="msg_top"><img id="msg_img" src="../../img/button/hint1.png" />提示信息<span class="msg_close">×</span></div><div id="msg_cont">'+e+'</div><div class="msg_close msg_btn" id="msg_cancle">取消</div><div class="msg_close msg_btn" id="msg_clear1">确定</div></div>');
    	$(".msg_close").click(function (){
        	$("#msg").remove();
        	$("#msg_mask").remove();
        });
   }
});