	$(function(){
		$(".online_feedback_city dl").click(function(){
			$("dd",this).show();
		});
		$(".online_feedback_city dl").mouseleave(function(){
			$("dd",this).hide();
		});
		//注册live800事件
        $("[btn='live800Btn']").bind("click",function(){
             openLive800();
        });
	});
	
	function sex(num,obj){
		$(".online_feedback_sex b").attr("class","");
		$("b",obj).attr("class","online_feedback_sex_on");
		if(num==0){
			$("#online_feedback_sex_input").val("M");
		}else{
			$("#online_feedback_sex_input").val("F");
		}
	}
	
	function provinceshow(num,obj){
		var provincename ;
		$(".online_feedback_city_municipal dt").html("");
		$("#online_feedback_city_municipal_input").val("");
		switch(num){
			case 0 :
			provincename = $(obj).html();
			$(".online_feedback_city_province dt").html(provincename);
			$("#online_feedback_city_province_input").val(provincename);
			$(".online_feedback_city_municipal dd ul").html("<li><a href=javascript:void(0) onclick=municipalshow(this)>北京</a></li>");
                        $("#online_feedback_city_municipal_input").val("北京");
                        $(".online_feedback_city_municipal dt").html("北京");
			return;
			case 1 :
			provincename = $(obj).html();
			$(".online_feedback_city_province dt").html(provincename);
			$("#online_feedback_city_province_input").val(provincename);
			$(".online_feedback_city_municipal dd ul").html("<li><a href=javascript:void(0) onclick=municipalshow(this)>上海</a></li>");
                        $("#online_feedback_city_municipal_input").val("上海");
                        $(".online_feedback_city_municipal dt").html("上海");
			return;
			case 2 :
			provincename = $(obj).html();
			$(".online_feedback_city_province dt").html(provincename);
			$("#online_feedback_city_province_input").val(provincename);
			$(".online_feedback_city_municipal dd ul").html("<li><a href=javascript:void(0) onclick=municipalshow(this)>广州</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>云浮</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>肇庆</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>汕尾</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>佛山</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>深圳</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>珠海</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>江门</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>茂名</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>潮州</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>阳江</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>惠州</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>中山</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>清远</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>汕头</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>韶关</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>揭阳</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>湛江</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>东莞</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>梅州</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>河源</a></li>");
			$("#online_feedback_city_municipal_input").val("广州");
                        $(".online_feedback_city_municipal dt").html("广州");
                        return;
			case 3 :
			provincename = $(obj).html();
			$(".online_feedback_city_province dt").html(provincename);
			$("#online_feedback_city_province_input").val(provincename);
			$(".online_feedback_city_municipal dd ul").html("<li><a href=javascript:void(0) onclick=municipalshow(this)>武汉</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>潜江</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>宜昌</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>黄石</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>恩施自治州</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>天门</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>孝感</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>鄂州</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>荆门</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>黄冈</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>咸宁</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>仙桃</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>随州</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>荆州</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>十堰</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>神龙架</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>襄樊</a></li>");
                        $("#online_feedback_city_municipal_input").val("武汉");
                        $(".online_feedback_city_municipal dt").html("武汉");
                        return;
			case 4 :
			provincename = $(obj).html();
			$(".online_feedback_city_province dt").html(provincename);
			$("#online_feedback_city_province_input").val(provincename);
			$(".online_feedback_city_municipal dd ul").html("<li><a href=javascript:void(0) onclick=municipalshow(this)>南京</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>宿迁</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>镇江</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>苏州</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>常州</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>徐州</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>盐城</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>南通</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>扬州</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>淮安</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>泰州</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>连云港</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>无锡</a></li>");
			$("#online_feedback_city_municipal_input").val("南京");
                        $(".online_feedback_city_municipal dt").html("南京");
                        return;
			case 5 :
			provincename = $(obj).html();
			$(".online_feedback_city_province dt").html(provincename);
			$("#online_feedback_city_province_input").val(provincename);
			$(".online_feedback_city_municipal dd ul").html("<li><a href=javascript:void(0) onclick=municipalshow(this)>杭州</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>宁波</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>温州</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>绍兴</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>舟山</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>衢州</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>嘉兴</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>台州</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>湖州</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>金华</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>丽水</a></li>");
			$("#online_feedback_city_municipal_input").val("杭州");
                        $(".online_feedback_city_municipal dt").html("杭州");
                        return;
			case 6 :
			provincename = $(obj).html();
			$(".online_feedback_city_province dt").html(provincename);
			$("#online_feedback_city_province_input").val(provincename);
			$(".online_feedback_city_municipal dd ul").html("<li><a href=javascript:void(0) onclick=municipalshow(this)>成都</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>绵阳</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>达州</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>雅安</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>阿坝藏族羌族自治州</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>凉山彝族自治州</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>攀枝花</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>宜宾</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>自贡</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>德阳</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>广元</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>内江</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>眉山</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>遂宁</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>乐山</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>泸州</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>广安</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>巴中</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>甘孜藏族自治州</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>资阳</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>南充</a></li>");
			$("#online_feedback_city_municipal_input").val("成都");
                        $(".online_feedback_city_municipal dt").html("成都");
                        return;
			case 7 :
			provincename = $(obj).html();
			$(".online_feedback_city_province dt").html(provincename);
			$("#online_feedback_city_province_input").val(provincename);
			$(".online_feedback_city_municipal dd ul").html("<li><a href=javascript:void(0) onclick=municipalshow(this)>济南</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>东营</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>聊城</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>淄博</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>莱芜</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>烟台</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>临沂</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>泰安</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>德州</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>威海</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>潍坊</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>枣庄</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>滨州</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>济宁</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>菏泽</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>青岛</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>日照</a></li>");
			$("#online_feedback_city_municipal_input").val("济南");
                        $(".online_feedback_city_municipal dt").html("济南");
                        return;
			case 8 :
			provincename = $(obj).html();
			$(".online_feedback_city_province dt").html(provincename);
			$("#online_feedback_city_province_input").val(provincename);
			$(".online_feedback_city_municipal dd ul").html("<li><a href=javascript:void(0) onclick=municipalshow(this)>沈阳</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>抚顺</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>辽阳</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>大连</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>葫芦岛</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>锦州</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>本溪</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>鞍山</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>盘锦</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>营口</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>丹东</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>朝阳</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>铁岭</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>阜新</a></li>");
			$("#online_feedback_city_municipal_input").val("沈阳");
                        $(".online_feedback_city_municipal dt").html("沈阳");
                        return;
			case 9 :
			provincename = $(obj).html();
			$(".online_feedback_city_province dt").html(provincename);
			$("#online_feedback_city_province_input").val(provincename);
			$(".online_feedback_city_municipal dd ul").html("<li><a href=javascript:void(0) onclick=municipalshow(this)>西安</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>咸阳</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>延安</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>榆林</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>渭南</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>商洛</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>安康</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>汉中</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>宝鸡</a></li><li><a href=javascript:void(0) onclick=municipalshow(this)>铜川</a></li>");
			$("#online_feedback_city_municipal_input").val("西安");
                        $(".online_feedback_city_municipal dt").html("西安");
                        return;
			case 10 :
				provincename = $(obj).html();
				$(".online_feedback_city_province dt").html(provincename);
				$("#online_feedback_city_province_input").val(provincename);
				$(".online_feedback_city_municipal dd ul").html("<li><a href=javascript:void(0) onclick=municipalshow(this)>重庆</a></li>");
				$("#online_feedback_city_municipal_input").val("重庆");
	                        $(".online_feedback_city_municipal dt").html("重庆");
	                        return;
			case 11 :
				provincename = $(obj).html();
				$(".online_feedback_city_province dt").html(provincename);
				$("#online_feedback_city_province_input").val(provincename);
				$(".online_feedback_city_municipal dd ul").html("<li><a href=javascript:void(0) onclick=municipalshow(this)>湖南</a></li>");
				$("#online_feedback_city_municipal_input").val("湖南");
	                        $(".online_feedback_city_municipal dt").html("湖南");
	                        return;
			case 12 :
				provincename = $(obj).html();
				$(".online_feedback_city_province dt").html(provincename);
				$("#online_feedback_city_province_input").val(provincename);
				$(".online_feedback_city_municipal dd ul").html("<li><a href=javascript:void(0) onclick=municipalshow(this)>河南</a></li>");
				$("#online_feedback_city_municipal_input").val("河南");
	                        $(".online_feedback_city_municipal dt").html("河南");
	                        return;                 
		}
	}
	
	function municipalshow(obj){
		var municipalname = $(obj).html();
		$(".online_feedback_city_municipal dt").html(municipalname);
		$("#online_feedback_city_municipal_input").val(municipalname);
	}
	function changeSex(sex,flag){
		var icon_man = document.getElementById("icon_man");
		var icon_women = document.getElementById("icon_women");
		var pic_man = document.getElementById("pic_man");
		var pic_women = document.getElementById("pic_women");
		var select_women = document.getElementById("select_women");
		var select_man = document.getElementById("select_man");
		var dom = document.getElementById("sex_men_women");
		if(sex=="M"){
			icon_man.className ="icon_man_on";
			icon_women.className ="icon_women";
			pic_man.className="pic_man";
			pic_women.className="pic_women_none";
			select_women.className="select_women";
			select_man.className="select_man_none";
			dom.value="1";
		}else{
			icon_man.className ="icon_man";
			icon_women.className ="icon_women_on";
			pic_man.className="pic_man_none";
			pic_women.className="pic_women";
			select_women.className="select_women_none";
			select_man.className="select_man";
			dom.value="2";
		}
		if(flag){
			sentListAjax();
		}else{
			sentInexAjax();
		}
	}
	var conditon = [];
	function checkRequire(id,cur,url,width,height,flag){
		var dom = document.getElementById(id);
		var checked = cur.getAttribute("checked");
		if(checked=="1"){
			var img = document.createElement("img");
			img.src = url;
			img.style.width=width;
			img.style.height=height;
			dom.appendChild(img);
			cur.className = "icon_check_on";
			cur.setAttribute("checked","0");
			conditon.push(dom.getAttribute("value"));
		}else{
			dom.innerHTML="";
			cur.className = "icon_check";
			cur.setAttribute("checked","1");
			for(var i =0,len=conditon.length;i<len;i++){
				if(dom.getAttribute("value")==conditon[i]){
					conditon.splice(i,1);
				}
			}
		}
		if(flag){
			sentInexAjax();
		}else{
			sentListAjax();
		}
	}
	
	function addFav(url,title){
	   if (document.all){
	      window.external.addFavorite(url,title);
	   }
	   else if (window.sidebar){
	      window.sidebar.addPanel(title, url, "");
	   }
	} 
	
	//产品属性栏js
	function tab_m(name, cursel, n) {
		for (i = 1; i <= n; i++) {
		    var menu = document.getElementById(name + i);
		    var con = document.getElementById("tc" + i);
		    menu.className = i == cursel ? "tm_on" : "";
		    con.style.display = i == cursel ? "block" : "none";
		}
	}
	
	
	/*
     * live800启动方法 
     * @returns {undefined}
     */
    function openLive800(){
        var companyID = "322008";
        var configID = "122891";
        var jid = "6081441131";
        var live800Url = "http://v2.live800.com/live800/chatClient/chatbox.jsp?"
                +"companyID="+companyID
                +"&configID="+configID
                +"&jid="+jid
                +"&enterurl="+encodeURI(document.URL)
                +"&pagetitle="+encodeURI($("title").html())
                +"&pagereferrer=&lan=zh";
        window.open(live800Url,'','width=600,height=430');
    }
	