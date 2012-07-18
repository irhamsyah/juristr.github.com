steal(
	'jquery/controller',
	'jquery/controller/view',
	'jquery/view/ejs',
	'juristr/blognews',
	'juristr/tweets',
	'juristr/stackexchange')
.then(
	'./views/dashboard.ejs')
.then(function(){

	$.Controller('Juristr.Dashboard',{

		init: function(){
			this.element.html(this.view("dashboard"));

			$(".js-blognews").juristr_blognews();
			$(".js-tweets").juristr_tweets();
			$(".js-stackoverflow").juristr_stackexchange();
		}

	});

});