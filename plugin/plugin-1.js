$.extend({
		sayHello: function(name){
			console.log('Hello,' + (name? name :'Dude') +'!');
		}
	})
	$.sayHello();
	$.sayHello('World');