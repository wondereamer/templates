"use strict";

$(function(){
	// 论坛
	$("ul.bbs-nav-menu li").click(function(){
		var $this = $(this);
		$this.addClass("active").siblings("li").removeClass("active");
	});
});