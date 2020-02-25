window.menuTree = (function($,module){

    function init(){
        $(document).ready(function(){
            $(".level2").click(function(){ 
                if(this.id==80){
                    $(this).attr("target", "_blank");
                }else{
                    $(this).attr("target", "welcomeFrame");
                }
                $(".menu_selected").removeClass("menu_selected");
                $(this).addClass("menu_selected");
            });
        });
    }
    
	function cssfn(){
		//------------------ 一级菜单 ------------------
		var level1 = $(".level1");
//		------------ 去掉一级菜单链接跳转 -------------
		$(".level1").each(function(){	
			$(this).attr("href", "javascript:void(0)");
		});
//		-------------- 调用菜单收缩函数 ---------------
		iconToggle(level1);
//		------------------ 菜单收缩 ------------------
		function iconToggle(el){
			el.each(function(){
				$(this).click(function(){
					$(this).next().slideToggle(300);
				});
			});
		}
//		------------------ 二级菜单span ------------------
		$(".level2 span").each(function(){	
			$(this).addClass("left_file");
		});
//		------------------ 菜单跳转 ------------------
		$(document).ready(function(){
			$(".level2").click(function(){ 
				if(this.id==80){
				    $(this).attr("target", "_blank");
				}else{
				    $(this).attr("target", "welcomeFrame");
				}
				$(".menu_selected").removeClass("menu_selected");
				$(this).addClass("menu_selected");
			});
		});
	}

	module.init = init;
	module.cssfn = cssfn;
	return module;
}($,window.menuTree || {}));
$(function(){
   menuTree.init(); 
});



/*function modelMenu(data){
	if (!Array.prototype.indexOf)
	{
	  Array.prototype.indexOf = function(elt , from)
	  {
	    var len = this.length >>> 0;
	    var from = Number(arguments[1]) || 0;
	    from = (from < 0)
	         ? Math.ceil(from)
	         : Math.floor(from);
	    if (from < 0)
	      from += len;
	    for (; from < len; from++)
	    {
	      if (from in this &&
	          this[from] === elt)
	        return from;
	    }
	    return -1;
	  };
	}
	
	
	var menuId = data.menuId;
	var tree = $('<div>');
	var curIdArr = []; //当前树层级 id数
	//菜单树一级目录
	for ( var i = 0; i < allMenus.length; i++) {
		if (allMenus[i].parentMenuId == menuId){
			curIdArr.push(allMenus[i].menuId);
			var link = allMenus[i].menuUrl.indexOf('SMTProject') > -1 ? allMenus[i].menuUrl : basePath + allMenus[i].menuUrl;
			if (allMenus[i].menuUrl == '#' || allMenus[i].menuUrl == ''){
				link = 'javascript:;';
			}
			var dom = '<a name="aa" id="'+allMenus[i].menuId+'" href="'+link+'" class="level1"><span></span>'+allMenus[i].menuName+'</a>';
			var ul = $('<ul>');
			tree.append(dom).append(ul);
		}
	}
	$.each(allMenus,function(){
		if (this.parentMenuId == menuId){
			curIdArr.push(this.menuId);
			var link = this.menuUrl.indexOf('SMTProject') > -1 ? this.menuUrl : basePath + this.menuUrl;
			if (this.menuUrl == '#' || this.menuUrl == ''){
				link = 'javascript:;';
			}
			var dom = '<a name="aa" id="'+this.menuId+'" href="'+link+'" class="level1"><span></span>'+this.menuName+'</a>';
			var ul = $('<ul>');
			tree.append(dom).append(ul);
		}
	});
	//菜单树二级目录
	$.each(allMenus,function(){
		if (curIdArr.indexOf(this.parentMenuId) > -1){
			var link = this.menuUrl.indexOf('SMTProject') > -1 ? this.menuUrl : basePath + this.menuUrl;
			if (this.menuUrl == '#' || this.menuUrl == ''){
				link = 'javascript:;';
			}
			var dom = '<a name="aa" id="'+this.menuId+'" href="'+link+'" class="level2"><span></span>'+this.menuName+'</a>';
			var curUlSelect = tree.find("a[id='"+ this.parentMenuId +"']");
			var li = $('<li>');
			li.append(dom);
			curUlSelect.next().append(li);
		}
	});
	
	for ( var i = 0; i < allMenus.length; i++) {
		if (curIdArr.indexOf(allMenus[i].parentMenuId) > -1){
			var link = allMenus[i].menuUrl.indexOf('SMTProject') > -1 ? allMenus[i].menuUrl : basePath + allMenus[i].menuUrl;
			if (allMenus[i].menuUrl == '#' || allMenus[i].menuUrl == ''){
				link = 'javascript:;';
			}
			var dom = '<a name="aa" id="'+allMenus[i].menuId+'" href="'+link+'" class="level2"><span></span>'+allMenus[i].menuName+'</a>';
			var curUlSelect = tree.find("a[id='"+ allMenus[i].parentMenuId +"']");
			var li = $('<li>');
			li.append(dom);
			curUlSelect.next().append(li);
		}
	}
	
	//$("#tree").empty().append(tree);
	$("#tree").html("");
	$("#tree").append(tree);
	menuTree.cssfn();
	$("#"+data.firstMenu).addClass("menu_selected");
}*/


function modelMenu(data){
	var menuId = data.menuId;
	//var tree = $('<div>');
	var tree = $('div');
	
	var curIdArr = []; //当前树层级 id数
	var firstDom = "";
	//菜单树一级目录
	for ( var i = 0; i < allMenus.length; i++) {
		if (allMenus[i].parentMenuId == menuId){
			curIdArr.push(allMenus[i].menuId);
			var link = allMenus[i].menuUrl.indexOf('SMTProject') > -1 ? allMenus[i].menuUrl : basePath + allMenus[i].menuUrl;
			if (allMenus[i].menuUrl == '#' || allMenus[i].menuUrl == ''){
				link = 'javascript:;';
			}
			var dom = '<a name="aa" id="'+allMenus[i].menuId+'" href="'+link+'" class="level1"><span></span>'+allMenus[i].menuName+'</a>';
			firstDom += dom;
			firstDom += '<ul></ul>';
			//var ul = $('<ul>');
			//tree.append(dom).append(ul);
		}
	}
	tree.innerHTML = firstDom;
	var select = document.querySelector("#tree");
	select.innerHTML = "";
	select.innerHTML = tree.innerHTML;
	
	//判断是否支持indexOf
	if (!Array.prototype.indexOf)
	{
	  Array.prototype.indexOf = function(elt /*, from*/)
	  {
	    var len = this.length >>> 0;

	    var from = Number(arguments[1]) || 0;
	    from = (from < 0)
	         ? Math.ceil(from)
	         : Math.floor(from);
	    if (from < 0)
	      from += len;

	    for (; from < len; from++)
	    {
	      if (from in this &&
	          this[from] === elt)
	        return from;
	    }
	    return -1;
	  };
	}

	//菜单树二级目录
	for ( var i = 0; i < allMenus.length; i++) {
		if (curIdArr.indexOf(allMenus[i].parentMenuId) > -1){
			var link = allMenus[i].menuUrl.indexOf('SMTProject') > -1 ? allMenus[i].menuUrl : basePath + allMenus[i].menuUrl;
			if (allMenus[i].menuUrl == '#' || allMenus[i].menuUrl == ''){
				link = 'javascript:;';
			}
			var dom = '<li><a name="aa" id="'+allMenus[i].menuId+'" href="'+link+'" class="level2"><span></span>'+allMenus[i].menuName+'</a></li>';
			var curUlSelect = $(select).find("a[id='"+ allMenus[i].parentMenuId +"']");
			var html = curUlSelect.next().html() || '';
			html += dom;
			$(curUlSelect.next()).html(html);
		}
	}
	
	menuTree.cssfn();
	$("#"+data.firstMenu).addClass("menu_selected");
}
