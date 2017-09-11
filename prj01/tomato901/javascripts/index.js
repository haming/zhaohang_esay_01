/**
 * Created by haoming on 17/3/16.
 */
$(document).ready(function () {
    //设置字体大小
    $('.t1_label1,.t1_label2,.t1_label3,.t2_s_b,.age_items,.t3_td').css('font-size', document.body.clientWidth / 28.5 + 'px');
    $('.red,.detail_btn,.t2_s_t,.center_l1,.form_input,.t2_td,.t4_td').css('font-size', document.body.clientWidth / 26.5 + 'px');
    $('.t3_s1,.t3_p_w,.model_time').css('font-size', document.body.clientWidth / 24.5 + 'px');
    $('.t3_s2,.t3_p_c,.t3_label,.form_label,.modal_c,.sex_items').css('font-size', document.body.clientWidth / 25.5 + 'px');
    $('.t3_vs').css('font-size', document.body.clientWidth / 10.5 + 'px');
    $('.t3_btn_b,.center_l2,.center_span').css('font-size', document.body.clientWidth / 22.5 + 'px');
    $('.t3_allow_w,.t3_form_allow,.t3_btn_s').css('font-size', document.body.clientWidth / 36.5 + 'px');
    $('.t3_label1').css('font-size', document.body.clientWidth / 32.5 + 'px');
    $('.modal_c_span').css('font-size', document.body.clientWidth / 20.5 + 'px');

    $("#name,#mobile").focus(function(){
        $('#center_btn').css('position',"absolute")
    });
    $("#name,#mobile").blur(function(){
        $('#center_btn').css('position',"fixed")
    });

    $('.model_close').click(function(){
        $('#modal_success').hide();

    });

    //点击滑动底部
    $(".center_btn").click(function () {
        $('html, body, .content').animate({scrollTop: 0}, 200);
        var name = $('#name').val()
        var mobile = $('#mobile').val()
        if(name_check(name) == 1){
            $('#name').attr('placeholder','您需要填写姓名才能获得免费险喔！')
            $('#name').addClass('name_mobile_input')
        }
        if(moblie_check(mobile) == 1){
            $('#mobile').attr('placeholder','您需要填写手机号才能获得免费险喔！')
            $('#mobile').addClass('name_mobile_input')
        }


    });
    //滑动消失事件
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();

        if (scrollTop <=150) {
            $(".center_btn").css("display", "none");
        } else {
            $(".center_btn").css("display", "block");
        }
    });

    //性别选择
    var sex = 0;//默认男 0-男,1-女
    $('#male').click(function(){
        if(sex==0){}
        else {
            $('#female').removeClass("sex_items_selected");
            $('#male').addClass("sex_items_selected");
            sex=0
        }
    });
    $('#female').click(function(){
        if(sex==1){}
        else {
            $('#male').removeClass("sex_items_selected");
            $('#female').addClass("sex_items_selected");
            sex=1
        }
    });

    //年龄选择
    var age =1;//默认25-35岁  0-25岁以下,1-25-35岁,2-35岁以上
    $('#age1').click(function(){
        if(age==0){}
        else {
            $('#age2').removeClass("age_items_selected");
            $('#age3').removeClass("age_items_selected");
            $('#age1').addClass("age_items_selected");
            age=0
        }
    });
    $('#age2').click(function(){
        if(age==1){}
        else {
            $('#age1').removeClass("age_items_selected");
            $('#age3').removeClass("age_items_selected");
            $('#age2').addClass("age_items_selected");
            age=1
        }
    });
    $('#age3').click(function(){
        if(age==2){}
        else {
            $('#age1').removeClass("age_items_selected");
            $('#age2').removeClass("age_items_selected");
            $('#age3').addClass("age_items_selected");
            age=2
        }
    });
    //授权
    var agree = true;
    // $(".t3_form_allow").click(function(){
    //     if(agree){
    //         $(".t3_active").hide();
    //         agree = !agree
    //     }else {
    //         $(".t3_active").show();
    //         agree = !agree
    //     }
    // });

    // var isShowDetail = true;
    // $('#t1_btn').click(function(){
    //     if(isShowDetail){
    //         $('.t2').slideUp();
    //     }else {
    //         $('.t2').slideDown();
    //         $('html, body, .content').animate({scrollTop: 500}, 200);
    //     }
    //     isShowDetail = !isShowDetail
    // });


    //名称验证
    function name_check(name) {
        if (name == "" || name == undefined || name == null) {
            return 1
        } else {
            //验证逻辑
            var patt1 = new RegExp("^[\u4e00-\u9fa5]{2,}$");//验证只能中文输入
            if (!patt1.test(name)) {
                return 2;
            } else {
                return 0;
            }
        }
    }

    //手机校验
    function moblie_check(moblie) {
        if (moblie == "" || moblie == undefined || moblie == null) {
            return 1
        } else {
            //验证逻辑
            var patt1 = new RegExp("^[1][3,4,5,7,8][0-9]{9}$");//验证长度，第一位数必须是1
            if (!patt1.test(moblie)) {
                return 2;
            } else {
                return 0;
            }
        }
    }
    
    //提交地址
    document.myform.action = "http://LG.cignacmb.com/cmc-lg/formCmc2Action_saveForm.action";

    // var host = location.host;
    // if(host.indexOf('.cigna') == -1 || host.indexOf('test.cigna') != -1){
	// 	document.myform.action = "http://LG.test-cignacmb.com/cmc-lg/formCmc2Action_saveForm.action";
	// }else{
	// 	document.myform.action = "http://LG.cignacmb.com/cmc-lg/formCmc2Action_saveForm.action";
	// }
    
    //设置返回的url
    $('#url').val("http://" + window.location.host + window.location.pathname + "get.php");
    
    //提交
    $('#t3_btn').click(function(){
        //校验
        if(name_check($('#name').val())==1){
            // $('#modal_tips').show();
            // $('#modal_tips_content').text("为给您提供更精准的测算结果，请补充完整的个人信息");
            showToastTips("您需填写姓名才能获得免费险喔！")
            return

        }else if(name_check($('#name').val())==2){
            // $('#modal_tips').show();
            // $('#modal_tips_content').text("请输入正确的中文姓名");
            showToastTips("请输入正确的中文姓名")
            return
        }
        if(moblie_check($('#mobile').val())==1){
            // $('#modal_tips').show();
            // $('#modal_tips_content').text("为给您提供更精准的测算结果，请补充完整的个人信息");
            showToastTips("您需填写手机号才能获得免费险喔！")

            return

        }else if(moblie_check($('#mobile').val())==2){
            // $('#modal_tips').show();
            // $('#modal_tips_content').text("请输入正确的手机号码");
            showToastTips("请输入正确的手机号码")

            return
        }

        //赋值
        var model ={
            name:$("#name").val(),
            mobile:$("#mobile").val(),
            sex:sex,
            age:age
        };

        //性别
        if(model.sex==0){
        	$("#gender").val("M");
        }else{
        	$("#gender").val("F");
        }
        //年龄  0-25岁以下,1-25-35岁,2-35岁以上
        if(model.age==0){
        	$("#remark").val("年龄：25岁以下");
        }else if(model.age==1){
        	$("#remark").val("年龄：25-35岁");
        }else{
        	$("#remark").val("年龄：35岁以上");
        }
       
        //提交
        if(agree){
           $("#myform").submit();
        }else{
           // $('#modal_tips').show();
           // $('#modal_tips_content').text("请勾选授权将本人相关信息转给招商信诺以提供后续保险服务");
        }
        	
       
    });

    $('.modal_btn').click(function(){
        $('.modal').hide();
    });
    /*******Tosat提示********/
    var err_mLeft = (document.body.offsetWidth - 260) / 2;
    $('#tips').css('left', err_mLeft);
    function showToastTips(content) {
        $('#tips').css('display', 'block');
        $('#tips_content').text(content);
        setTimeout(function () {
            $('#tips').css('display', 'none');
        }, 1000)
    }
});

window.onload =function(){
    function setPrice(){
        var sex = $('#gender').val()
        var age = $('#remark').val()
        if(sex =='M'){
            if(age == '年龄：25岁以下'){
                $('#price').text("150-430")
            }else if(age == '年龄：25-35岁'){
                $('#price').text("430-620")
            }else if(age == '年龄：35岁以上'){
                $('#price').text("620-750")
            }
        }
        if(sex =='F'){
            if(age == '年龄：25岁以下'){
                $('#price').text("100-380")
            }else if(age == '年龄：25-35岁'){
                $('#price').text("380-550")
            }else if(age == '年龄：35岁以上'){
                $('#price').text("550-650")
            }
        }
    }

	var iframe = document.getElementById("myiframe");
	iframe.contentWindow.document.body.innerHTML='';
	if (iframe.attachEvent)
	{
	  iframe.attachEvent("onload", function(){ _displayResultAndClearForm(); });
	}else
	{
	  iframe.onload = function(){ _displayResultAndClearForm(); };
	}
	function _displayResultAndClearForm()
	{
		var res = iframe.contentWindow.document.body.innerHTML;
      
		if(parseInt(res)=='200'){
            setPrice();
			//成功回调
	        $('#modal_success').show();
	        // $('#modal_name').text($('#name').val());
            document.getElementById("myform").reset()

        }
      
	}
};