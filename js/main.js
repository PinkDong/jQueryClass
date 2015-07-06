require.config({

	baseUrl: 'js',

	paths: {
		'jquery': 'libs/jquery.1.11.3.min'
	},
	shim: {
		'jquery':{
			deps: ['$']
		}
	},

	urlArgs : 'ts='+ (new Date()).getTime()

});

require(['init']);