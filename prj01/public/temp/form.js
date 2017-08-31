//表单的radio
function radioChange(obj){
	$(obj).find(".radio-box1").click(function(){
		$(this).find(".radio-bg").addClass("radio-bg2");
		$(this).find("input[type=radio]").prop("checked",true);
		$(this).siblings(".radio-box2").find(".radio-bg").removeClass("radio-bg2");
		$(this).siblings(".radio-box3").find(".radio-bg").removeClass("radio-bg2");
		$(this).siblings(".radio-box4").find(".radio-bg").removeClass("radio-bg2");
		$(this).siblings(".radio-box5").find(".radio-bg").removeClass("radio-bg2");
		
		$(this).siblings(".radio-box2").find("input[type=radio]").prop("checked",false);
		$(this).siblings(".radio-box3").find("input[type=radio]").prop("checked",false);
		$(this).siblings(".radio-box4").find("input[type=radio]").prop("checked",false);
		$(this).siblings(".radio-box5").find("input[type=radio]").prop("checked",false);
		
		});
	$(obj).find(".radio-box2").click(function(){
		$(this).find(".radio-bg").addClass("radio-bg2");
		$(this).find("input[type=radio]").prop("checked",true);
		$(this).siblings(".radio-box1").find(".radio-bg").removeClass("radio-bg2");
		$(this).siblings(".radio-box3").find(".radio-bg").removeClass("radio-bg2");
		$(this).siblings(".radio-box4").find(".radio-bg").removeClass("radio-bg2");
		$(this).siblings(".radio-box5").find(".radio-bg").removeClass("radio-bg2");
		
		$(this).siblings(".radio-box1").find("input[type=radio]").prop("checked",false);
		$(this).siblings(".radio-box3").find("input[type=radio]").prop("checked",false);
		$(this).siblings(".radio-box4").find("input[type=radio]").prop("checked",false);
		$(this).siblings(".radio-box5").find("input[type=radio]").prop("checked",false);
		});	
	$(obj).find(".radio-box3").click(function(){
		$(this).find(".radio-bg").addClass("radio-bg2");
		$(this).find("input[type=radio]").prop("checked",true);
		$(this).siblings(".radio-box1").find(".radio-bg").removeClass("radio-bg2");
		$(this).siblings(".radio-box2").find(".radio-bg").removeClass("radio-bg2");
		$(this).siblings(".radio-box4").find(".radio-bg").removeClass("radio-bg2");
		$(this).siblings(".radio-box5").find(".radio-bg").removeClass("radio-bg2");
		
		$(this).siblings(".radio-box1").find("input[type=radio]").prop("checked",false);
		$(this).siblings(".radio-box2").find("input[type=radio]").prop("checked",false);
		$(this).siblings(".radio-box4").find("input[type=radio]").prop("checked",false);
		$(this).siblings(".radio-box5").find("input[type=radio]").prop("checked",false);
		});
	$(obj).find(".radio-box4").click(function(){
		$(this).find(".radio-bg").addClass("radio-bg2");
		$(this).find("input[type=radio]").prop("checked",true);
		$(this).siblings(".radio-box1").find(".radio-bg").removeClass("radio-bg2");
		$(this).siblings(".radio-box2").find(".radio-bg").removeClass("radio-bg2");
		$(this).siblings(".radio-box3").find(".radio-bg").removeClass("radio-bg2");
		$(this).siblings(".radio-box5").find(".radio-bg").removeClass("radio-bg2");
		
		$(this).siblings(".radio-box1").find("input[type=radio]").prop("checked",false);
		$(this).siblings(".radio-box2").find("input[type=radio]").prop("checked",false);
		$(this).siblings(".radio-box3").find("input[type=radio]").prop("checked",false);
		$(this).siblings(".radio-box5").find("input[type=radio]").prop("checked",false);
		});
	$(obj).find(".radio-box5").click(function(){
		$(this).find(".radio-bg").addClass("radio-bg2");
		$(this).find("input[type=radio]").prop("checked",true);
		$(this).siblings(".radio-box1").find(".radio-bg").removeClass("radio-bg2");
		$(this).siblings(".radio-box2").find(".radio-bg").removeClass("radio-bg2");
		$(this).siblings(".radio-box3").find(".radio-bg").removeClass("radio-bg2");
		$(this).siblings(".radio-box4").find(".radio-bg").removeClass("radio-bg2");
		
		$(this).siblings(".radio-box1").find("input[type=radio]").prop("checked",false);
		$(this).siblings(".radio-box2").find("input[type=radio]").prop("checked",false);
		$(this).siblings(".radio-box3").find("input[type=radio]").prop("checked",false);
		$(this).siblings(".radio-box4").find("input[type=radio]").prop("checked",false);
		});
}
/*表单的点选*/
function checkChange(obj){
	$(obj).parent(".checkbox").find("li").click(function(){
		$(obj).val($(this).text());
		$(this).siblings("li").removeClass("active");
		$(this).addClass("active");
		});
	}
/*表单的下拉*/
function selectChange(obj){
	$(obj).parent(".selectbox").find("dl dt").click(function(){
		$(this).next("dd").show();
		});
	$(obj).parent(".selectbox").find("dl dd ul li").click(function(){
		var oText=$(this).text();
		$(obj).val(oText);
		$(obj).parent(".selectbox").find("dl dt span").text(oText);
		$(obj).parent(".selectbox").find("dl dd").hide();
		});
		
	}
/*点击页面，关掉表单的下拉*/
function closeSelectChange(obj){
	$(document).click(function (e) {
		dragel_a = $(obj)[0],
		target = e.target;
		if (dragel_a !== target && !$.contains(dragel_a, target)) {
			$(obj).find("dl dd").hide();
			}
		});
	}
	


