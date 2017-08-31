var tag = tag || '';

function strtr(str, assoc){
	for(var k in assoc){
		str = str.replace(new RegExp(k, 'g'), assoc[k]);
	}

	return str;
}

$(function(){
	// 导航选中
	if(tag){
		var o = $("#navlist a[data-tag="+tag+"]");
		if(o.length > 0)
			o.addClass('on')
	}

	// 浏览量++ 有cdn 所以用js增加浏览量..
	if(typeof vid != 'undefined' && typeof nid != 'undefined'){
		$.post('/ajax.php?a=view',{vid:vid,nid:nid});
	}
	// 问题详情页的浏览量
	if(typeof qid != 'undefined'){
		$.post('/ajax.php?a=view_qa',{qid:qid});
	}

	// 保险问问首页
	if(tag == 'wenwen'){
		// 提交问题
		$("#question_sub").click(function() {
			// todo.. 判断是否登陆
			
			var v = $.trim($("#question").val());
			if(v == ''){
				layer.alert('请输入问题内容', function(i){
					$("#question").focus();
					layer.close(i);
				});
				return ;
			}
			$.post('/ajax.php?a=question', {tit:v}, function(d){
				var d = eval('('+d+')');
				switch(d.code){
					case 1:
						layer.alert('提交成功,请等待管理员审核');
					break;
					case -2:
						layer.confirm('该问题已存在,是否转到问题页？', function(i){
							layer.close(i);
							location.href = d.url
						});
					break;
					default:
						layer.alert(d.msg || '系统错误~请稍后再试');
				}
			});
		});
		// 加载更多 需要模板中的全局变量page和template
		var load_clickable = true;
		$('.load_more').click(function() {
			var type = $(".tab li.on").attr('data-type'),
				_this = $(this);
			if(!type || typeof template == 'undefined' || !template[type] || typeof page == 'undefined' || !page[type]){
				layer.alert('系统错误(-1)~');
				return;
			}

			if(page[type]['isend']){
				layer.alert('没有了~');
				return;
			}

			if(!load_clickable) return false;
			load_clickable = false;
			var param = {
				type: type,
				pageno: page[type]['pageno'],
				pagesize: page[type]['pagesize']
			};
			layer.load(1, { shade: [0.1,'#fff']});
			$.post('/ajax.php?a=load_qa', param, function(d){
				load_clickable = true;
				layer.closeAll('loading');
				var d = eval("("+d+")");
				if(d.code != '1'){
					layer.alert('系统错误(-2)~');
					return;
				}
				// 已到最后一页,再点就不用请求了~有个情况会多请求次，最后页的数量和pagesize一样
				if(d.count < page[type]['pagesize']){
					page[type]['isend'] = 1;
					if(d.count == 0){
						layer.alert('没有了~');
						return;
					}
				}else{
					page[type]['pageno']++;
				}

				var str = template[type],
					res = '',
					assoc = {};
				for(var k in d['data']){
					for(var k1 in d['data'][k]){
						if(k1 == 'ismobile'){
							d['data'][k][k1] = d['data'][k][k1] == 1 ? template.ismobile : '';
						}
						assoc['{'+k1+'}'] = d['data'][k][k1];
					}
					res += strtr(str, assoc);
				}
				_this.before(res);
			});
		});
		
		$("#gotop").click(function() {
			$("body,html").animate({'scrollTop':'0'}, function(){
				$("#question").focus();
			});
		});
	}
})