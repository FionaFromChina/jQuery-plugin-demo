;(function($,window,document,undefined){
	var Beautifier = function(ele,opt){
	this.$element = ele,
	this.defaults = {
		'color':'red',
		'fontSize':'12px',
		'textDecoration':'none'
	},
	this.options = $.extend({},defaults,opt);
}

Beautifier.prototype = {
	beautify: function(){
		return this.$element.css({
			'color':this.options.color,
			'fontSize':this.options.fontSize,
			'textDecoration':this.options.textDecoration
		});
	}
}

$.fn.myPlugin = function(options){
	var Beautifier = new Beautifier(this,options);
	return Beautifier.beautify();
}
})(jQuery,window,document);





