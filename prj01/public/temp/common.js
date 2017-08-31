/*设置默认的IQID*/
function setDefaultIQID() {
	var sUrl = document.referrer;
	var siq_id = '';
	if (sUrl == '') {
		siq_id = $("#iqId").val() ? $("#iqId").val() : '13970373';
	} else {
		if (sUrl.indexOf("baidu.com") != -1)
			siq_id = "13970364";
		else if (sUrl.indexOf("google.com.hk") != -1)
			siq_id = "13970365";
		else if (sUrl.indexOf("one.cn.yahoo.com") != -1)
			siq_id = "13970366";
		else if (sUrl.indexOf("soso.com") != -1)
			siq_id = "13970367";
		else if (sUrl.indexOf("cn.bing.com") != -1)
			siq_id = "13970368";
		else if (sUrl.indexOf("sogou.com") != -1)
			siq_id = "13970369";
		else if (sUrl.indexOf("iask.com") != -1)
			siq_id = "13970370";
		else if (sUrl.indexOf("yodao.com") != -1)
			siq_id = "13970371";
		else if (sUrl.indexOf("ins.cmbchina.com") != -1)
			siq_id = "14355531";
		else if (sUrl.indexOf("bank.ecitic.com") != -1)
			siq_id = "14355532";
		else
			siq_id = $("#iqId").val() ? $("#iqId").val() : '13970373';
	}
	return siq_id;
}



/*搜索关键词*/
function searchWords()
{
    var surl = document.referrer;
    var key = '';
    if( surl.indexOf("baidu.com") != -1 ){
        key = surl.indexOf("m.baidu.com") != -1 ? 'word' : 'wd';
    }else if(surl.indexOf("google.com.hk") != -1){
        key  = "q";
    }else if(surl.indexOf("one.cn.yahoo.com") != -1){
        key  = "q";				
    }else if(surl.indexOf("haosou.com") != -1){
        key  = "q";	
    }else if(surl.indexOf("cn.bing.com") != -1){
        key  = "q";
    }else if(surl.indexOf("sogou.com") != -1){
        key  = "query";			
    }else if(surl.indexOf("youdao.com") != -1){
        key  = "q";
    }else{  key  = '';   }
    
    var keywords = '',words = '';
    if(key!='')
    {
        var furl=surl;
        if(surl.indexOf("?") != -1){   var u=surl.split("?");  if(u[1]) { furl=u[1]; }   }			
        var reg = new RegExp("(^|&|#)"+ key +"=([^&]*)(&|$)",'i');
        var r = furl.match(reg);	
        if(r)
        {		
            words=r[2];	
            words=words.replace(/\+/g,' ')
            keywords = decodeURIComponent(words);            
        }
    }
    return keywords;
};

//获取cookie的值
function getCookie(name)
{
    var value = '';
    var search = name + '=';
    if (document.cookie.length > 0)
    {
       offset = document.cookie.indexOf(search);
       if (offset != -1)
       {
            offset += search.length;
            end = document.cookie.indexOf(';',offset);
            if (end == -1) { end = document.cookie.length;}
            value = unescape(document.cookie.substring(offset,end))
       }
    }
    return value;
    //另外一种方法
    //ar cookieArray = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    //return cookieArray != null ? unescape(cookieArray[2]) : null;
};

/*获取url所对应的参数*/
function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null)
		return unescape(r[2]);
	return '';
}



/*设置gridsumid和 pyid*/
function pyidAndGridsumid(){
	$.ajax({ 
              url : "http://cm.ipinyou.com/revcms?sourceid=zsxn&fun=callback",
              type:'GET',
              dataType : "jsonp", 
              jsonp: "callback",//服务端用于接收callback调用的function名的参数 
              jsonpCallback:"callback",//callback的function名称 
              success : function(json)
              {
                var pyid = document.getElementById('pyid');
                if (document.getElementById('pyid')) { pyid.value = json; }
              }
        });
		
	if(document.getElementById('gridsumid'))
    {
           
    	 var gridsumid =getCookie('_gscu_1822460529')? getCookie('_gscu_1822460529') : getCookie('_gscu_1143325463');
   		 $('#gridsumid').val(gridsumid);

    }
	
}






function init(){

	pyidAndGridsumid();
	var host = location.host;

	//设置返回的url
	 $('#url').val("http://" + window.location.host + "/include_form/get.php");
	

	//这里是操作WT.mc_id
	var mc_id = getUrlParam("WT.mc_id");
	var mc_id2 = getCookie("WT.mc_id") ? getCookie("WT.mc_id") : '70000000';
	mc_id = mc_id ? mc_id : mc_id2;
	$("#wtmcId").val(mc_id);

	//这里设置campaign和iqid
	var qdh = getUrlParam("qdh");
	var cc = getUrlParam("cc");
	var campaign = getUrlParam("campaign");
	var ccode = cc ? cc : campaign;
	var iq_id = getUrlParam("iq_id");
	
	if(iq_id.replace(/(^\s*)|(\s*$)/g, "").length != 0){
		$("#iqId").val(iq_id);	
	}
	if($("#iqId").val() == ''){
		$("#iqId").val(setDefaultIQID());
	}
	if (ccode){
		$("#campaignCode").val(ccode);		
	} 

	var pageName=getUrlParam("pageName");
	if(pageName){
		$("#pageName").val(pageName);
	}

	$("#searchWords").val(searchWords());
	

	document.myform.action = "http://LG.cignacmb.com/cmc-lg/formCmc2Action_saveForm.action";
}


var check ={
	/*这里是校验姓名的*/
	name:function(value){
		if($("#"+value).length>0){
				 var name = $("#"+value).val();
			 	 name = name.replace(/(^\s*)|(\s*$)/, "");
			  	if (name.length >= 25 || name.length < 1)
		      	{
				 	 show_tips("请输入合法的姓名","name");
				 	 return false;
			 	 }
	 	 }
	},
	mobile:function(value){
		/*这里是校验电话的*/
	 	if($("#"+value).length>0){
				var m1 = /^(1[3578][0-9]|14[57])\d{8}$/;
				  var mobile = $("#"+value).val();
				  mobile = mobile.replace(/(^\s*)|(\s*$)/, "");
				  if(!mobile.length)
			      {
			      	show_tips("请填写您的手机号码","mobile");
					return false;
				  }
				  if (!(m1.test(mobile)))
			      {
			      	show_tips("请输入正确的电话号码","mobile");
					return false;
				  }
	 	 }
	},

	age:function(value){
		 	 /*年龄的获取值判断*/
		if($("#"+value).length>0){
			if($("#"+value).val() =="请选择" || $("#"+value).val() ==""){
					show_tips("请选择你的年龄","age");
					return false;
			}
		}
	},

	gender:function(value){
				 	 /*性别的获取值判断*/
		if($("#"+value).length>0){		 	 
			if($("#"+value+" input[name= 'gender']:checked").val() == undefined){
					show_tips("请选择你的性别","gender");

					return false;
			}
		}
	},
	province:function(value){
		 	 	 /*省份的获取值判断*/
	 	if($("#"+value).length>0){	 	 	 
		 	 if($("#"+value).val() =="请选择" || $("#"+value).val() ==""){
			 	show_tips("请选择你的省份","province");
					return false;
			 }
		}
	},
	city:function(value){
			 	 /*城市的获取值判断*/
	 	if($("#"+value).length>0){	 	 	 
		 	 if($("#"+value).val() =="请选择" || $("#"+value).val() ==""){
			 	show_tips("请选择你的城市","city");
					return false;
			 }
		}
	},
	email:function(value){
		/*这里是校验邮箱的*/
	 	 if($("#"+value).length>0){
				var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
				 var email = $("#"+value).val();
				 if(!filter.test(email)){
				 	show_tips("请输入正确的邮箱","email");
					return false;
				 }
	 	 }	
	},
	birthday:function(value){
		     	/*校验birthday*/
	 	 if($("#"+value).length>0){
				var birth  = /\d{4}-\d{2}-\d{2}/;
				 var birthday = $("#"+value).val();
				 if(!birth.test(birthday)){
				 	show_tips("请输入正确的生日","birthday");
				 	return false;
				 }
	 	 }
	},
	year:function(value){
		 	 	 /*生日year-month-day的获取值判断*/
	 	 if($("#"+value).length>0){
		 	 if($("#"+value).val() =="请选择" || $("#"+value).val() ==""){
			 	show_tips("请选择你的年份","year");
					return false;
			 }
		}
	},
	month:function(value){
		if($("#"+value).length>0){
		 	 if($("#"+value).val() =="请选择" || $("#"+value).val() ==""){
			 	show_tips("请选择你的月份","month");
					return false;
			 }
		}
	},
	day:function(value){
		if($("#"+value).length>0){
				if($("#"+value).val() =="请选择" || $("#"+value).val() ==""){
						 	show_tips("请选择你的天数","day");
								return false;
						 }
		}
	},
	bestContractTime:function(value){
		 	 	 /*联系时间的获取值判断*/
	 	if($("#"+value).length>0){	 	 	 
		 	 if($("#"+value).val() =="请选择" || $("#"+value).val() ==""){
			 	show_tips("请选择你的联系时间","bestContractTime");
					return false;
			 }
		}
	},
	bestContractDay:function(value){		
	 	 	 	 /*工作时间的获取值判断*/
	 	if($("#"+value).length>0){	 	 	 
		 	 if($("#"+value).val() =="请选择" || $("#"+value).val() ==""){
			 	show_tips("请选择你的工作时间","bestContractDay");
					return false;
			 }
		}
	},
	quoted:function(value){
	 /*校验额度*/
	 	 if($("#"+value).length>0){
				var quo=/^[0-9]+(.[0-9]{1,3})?$/;
				 var quoted = $("#"+value).val();	 	
				 if(!quo.test(quoted)){
				 	show_tips("请输入正确的额度","quoted");
					return false;
				 }
	 	 }
	},
	maplan:function(value){
			 	 	 	 /*保障计划的获取值判断*/
	 	if($("#"+value).length>0){	 	 	 
		 	 if($("#"+value).val() =="请选择" || $("#"+value).val() ==""){
			 	show_tips("请选择你的保障计划","maplan");
					return false;
			 }
		} 
	},
	mapackage:function(value){
			 /*保障方案的获取值判断*/
	 	if($("#"+value).length>0){	 	 	 
		 	 if($("#"+value).val() =="请选择" || $("#"+value).val() =="请选择"){
			 	show_tips("请选择你的保障方案","mapackage");
					return false;
			 }
		} 
	},
	areaofcover:function(value){
					 /*保障区域的获取值判断*/
	 	if($("#"+value).length>0){	 	 	 
		 	 if($("#"+value).val() =="请选择" || $("#"+value).val() ==""){
			 	show_tips("请选择你的保障区域","areaofcover");
					return false;
			 }
		}
	},
	medicalcoreplan:function(value){
			 /*保障免赔额的获取值判断*/
	 	if($("#"+value).length>0){	 	 	 
		 	 if($("#"+value).val() =="请选择" || $("#"+value).val() ==""){
			 	show_tips("请选择你的保障免赔额","medicalcoreplan");

					return false;
			 }
		}
	},

	outpatient:function(value){
			 /*补充保障的获取值判断*/
	 	if($("#"+value).length>0){	 	 	 
		 	 if($("#"+value).val() =="请选择" || $("#"+value).val() ==""){
			 	show_tips("请选择你的补充保障","outpatient");
					return false;
			 }
		}
	},

	wellbeing:function(value){
			 /*健康保障的获取值判断*/
	 	if($("#"+value).length>0){	 	 	 
		 	 if($("#"+value+" input[name= 'wellbeing']:checked").val() == undefined){
			 	show_tips("请选择你的健康保障","wellbeing");
					return false;
			 }
		}
	},

	dentalVision:function(value){
			 /*牙科保障的获取值判断*/
	 	if($("#"+value).length>0){	 	 	 
		 	 if($("#"+value+" input[name= 'dentalVision']:checked").val() == undefined){
			 	show_tips("请选择你的牙科保障","dentalVision");

					return false;
			 }
		}
	},

	paymentfreq:function(value){
			 /*缴额方式的获取值判断*/
	 	if($("#"+value).length>0){	 	 	 
		 	 if($("#"+value+" input[name= 'paymentfreq']:checked").val() == undefined){
			 	show_tips("请选择你的缴额方式","paymentfreq");

					return false;
			 }
		}
	},

	pause:function(value){
					 /*缴额币种的获取值判断*/
	 	if($("#"+value).length>0){	 	 	 
		 	 if($("#"+value).val() =="请选择" || $("#"+value).val() ==""){
			 	show_tips("请选择你的缴额币种","pause");

					return false;
			 }
		}
	},

	location:function(value){
		 /*校验保单所在地*/
	 	if($("#"+value).length>0){
				var location = $("#"+value).val();
			 	 location = location.replace(/(^\s*)|(\s*$)/, ""); 	
				 if(location.length <1){
				 	show_tips("请输入正确的保单所在地","location");

					return false;
				 }
	 	 } 
	},
	areaofcover:function(value){
					 /*保障区域的获取值判断*/
	 	if($("#"+value).length>0){	 	 	 
		 	 if($("#"+value).val() =="请选择" || $("#"+value).val() ==""){
			 	show_tips("请选择你的保障区域","areaofcover");
					return false;
			 }
		}
	},
	citizenship:function(value){
			 /*国籍的获取值判断*/
	 	if($("#"+value).length>0){	 	 	 
		 	 if($("#"+value).val() =="请选择" || $("#"+value).val() ==""){
			 	show_tips("请选择你的国籍","citizenship");

					return false;
			 }
		}
	},

	named:function(value){
		 	 	 /*校验保单人*/
	 	if($("#"+value).length>0){
				var named = $("#"+value).val();
			 	 named = named.replace(/(^\s*)|(\s*$)/, ""); 	
				 if(named.length <1){
				 	show_tips("请输入正确的保单人","named");
					return false;
				 }
	 	 } 
	},

	fore:function(value){
		 /*校验额度*/
	 	 if($("#"+value).length>0){
				var fo=/^[0-9]+(.[0-9]{1,3})?$/;
				 var fore = $("#"+value).val();	 	
				 if(!fo.test(fore)){
				 	show_tips("请输入正确的额度","fore");
					return false;
				 }
	 	 }
	},

	homeTel:function(value){
		/*这里是校验国定电话的*/
	 	 if($("#"+value).length>0){
				var m2 = /\d{3}-\d{8}|\d{4}-\d{7}/;
				  var homeTel = $("#"+value).val();
				  homeTel = homeTel.replace(/(^\s*)|(\s*$)/, "");
				  if(!homeTel.length)
			      {
					show_tips("请填写您的手机号码","homeTel");
					return false;
				  }
				  if (!(m2.test(homeTel)))
			      {
					show_tips("请输入正确的电话号码","homeTel");
					return false;
				  }
	 	 }
	},

	remark1:function(value){
		/*判断remark1是否为空*/
		var context=$("#laber_remark1").html();
	 	 if($("#"+value).length > 0){
	 	 	var remark1 = $("#"+value).val();
			remark1 = remark1.replace(/(^\s*)|(\s*$)/, "");
			if(!remark1.length){
				show_tips('请正确填写'+context.substring(0,context.length-1),"remark1");

				return false;
			}
	 	 }
	},
	remark2:function(value){
		/*判断remark1是否为空*/
		var context=$("#laber_remark2").html();
	 	 if($("#"+value).length > 0){
	 	 	var remark2 = $("#"+value).val();
			remark2 = remark2.replace(/(^\s*)|(\s*$)/, "");
			if(!remark2.length){
				//show_tips('请正确填写'+$("#laber_remark2").html(),"remark2");
				show_tips('请正确填写'+context.substring(0,context.length-1),"remark2");

				return false;
			}
	 	 }
	},
	remark3:function(value){
		/*判断remark1是否为空*/
		var context=$("#laber_remark3").html();
	 	 if($("#"+value).length > 0){
	 	 	var remark3 = $("#"+value).val();
			remark3 = remark3.replace(/(^\s*)|(\s*$)/, "");
			if(!remark3.length){
				show_tips('请正确填写'+context.substring(0,context.length-1),"remark3");

				return false;
			}
	 	 }
	},	
	remark4:function(value){
		/*判断remark1是否为空*/
		var context=$("#laber_remark4").html();
		var context=$("#laber_remark4").html();
	 	 if($("#"+value).length > 0){
	 	 	var remark4 = $("#"+value).val();
			remark4 = remark4.replace(/(^\s*)|(\s*$)/, "");
			if(!remark4.length){
				show_tips('请正确填写'+context.substring(0,context.length-1),"remark4");

				return false;
			}
	 	 }
	},
	remark5:function(value){
		/*判断remark1是否为空*/
		var context=$("#laber_remark5").html();
	 	 if($("#"+value).length > 0){
	 	 	var remark1 = $("#"+value).val();
			remark1 = remark1.replace(/(^\s*)|(\s*$)/, "");
			if(!remark1.length){
				show_tips('请正确填写'+context.substring(0,context.length-1),"remark5");

				return false;
			}
	 	 }
	},
	remark6:function(value){
		/*判断remark1是否为空*/
		var context=$("#laber_remark6").html();
	 	 if($("#"+value).length > 0){
	 	 	var remark1 = $("#"+value).val();
			remark1 = remark1.replace(/(^\s*)|(\s*$)/, "");
			if(!remark1.length){
				show_tips('请正确填写'+context.substring(0,context.length-1),"remark6");

				return false;
			}
	 	 }
	}
}

function checkcommit(fields){
	for(var i=0,len=fields.length;i<len;i++){
		var a=check[fields[i]];
		if(a(fields[i]) =="0"){return false;}
	}

	 	 $("#myform").submit();
}

$(function(){
	init();	

})


window.onload =function(){	
	
	
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
	  var res =iframe.contentWindow.document.body.innerHTML; 
	  if(typeof(dcsPageTrack) == 'function'){ dcsPageTrack("WT.si_n",document.getElementById("product").value,true,"WT.si_x","名单提交成功",true,"WT.rh_un",$("#name").val(),true,"WT.rh_up",$("#mobile").val(),true);}
      if (res == '200') //清空表单 显示提示
      {
			var subUrl=$("#subUrl").val();
       	 	$(':input','#myform') 
			.val('') 
			.removeAttr('checked') 
			.removeAttr('selected');
      
		window.location.href=subUrl+"?status="+res;


       /* $('#name').val('');
		$('#mobile').val('');
		$('#email').val('');
		$('#birthday').val('');
		$('#quoted').val('');
		$('#location').val('');
		$('#named').val('');
		$('#fore').val('');
		$('#homeTel').val('');

		//window.location.href="success.html?status="+res;
		var subUrl=$("#subUrl").val();
		window.location.href=subUrl+"?status="+res;*/
      }
	}
};