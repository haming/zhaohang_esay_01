
$(function(){$(".serve-tabs li a").hover(function(){var tabIndex=$(this).parent().index();var tabDiv=$(this).parents(".content").next(".serve-cont").find(".serve-bd").eq(tabIndex);$(this).parent().addClass("current");$(this).parent().siblings().removeClass("current");tabDiv.show().siblings().hide();},function(){});})
var n,c=0
$(function(){n=$("#scrollArea li").size();if(n<6){$("#right").addClass("stop");}
$("#scrollArea ul").css("width",180*n)
$("#left").click(function(){c--
if(c<=0){c=0;$(this).addClass("stop")}
if(n>5){$("#right").removeClass("stop");}
$("#scrollArea").animate({scrollLeft:180*c},200)})
$("#right").click(function(){c++;if(n>5){$("#left").removeClass("stop");}
if(c>=n-5){c=n-5;$(this).addClass("stop")}
$("#scrollArea").animate({scrollLeft:180*c},200)})});var n_video,c_video=0
$(function(){$(".bxal-hot-ul li a,.case-tit-ul li a").hover(function(){var tabIndex=$(this).parent().index();var tabDiv=$(this).parents(".bxal-hot,.case-hot").next(".bxal-list,.case-list").find(".bxal-list-cont,.case-list-cont").eq(tabIndex);$(this).parent().addClass("hot");$(this).parent().siblings().removeClass("hot");tabDiv.show().siblings().hide();},function(){});})

$(function(){
	//商品分类
	$('.all-goods .item').hover(function(){
		$(this).addClass('active').find('s').hide();
		$(this).find('.product-wrap').show();
	},function(){
		$(this).removeClass('active').find('s').show();
		$(this).find('.product-wrap').hide();
	});
	});
//文章页右侧

$(function(){
	$(".con_wap .tab a").mouseover(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var index = $(this).index();
		number = index;
		$('.con_wap .sidebar div').hide();
		$('.con_wap .sidebar div:eq('+index+')').show();
	});
	
	var auto = 1;  //等于1则自动切换，其他任意数字则不自动切换
	if(auto ==1){
		var number = 0;
		function autotab(){
			number++;
			$('.con_wap .tab a:eq('+number+')').addClass('on').siblings().removeClass('on');
			$('.con_wap .sidebar div:eq('+number+')').show().siblings().hide();
		}
		var tabChange = setInterval(autotab,3000);
		//鼠标悬停暂停切换
		$('.con_wap').mouseover(function(){
			clearInterval(tabChange);
		});
		$('.con_wap').mouseout(function(){
			tabChange = setInterval(autotab,3000);
		});
	  }
});

