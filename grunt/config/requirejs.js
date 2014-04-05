module.exports = {
	compile: {
		options: {
			baseUrl: 'js/',
			out: 'build/js/app.js',
			name: 'almond',
			include: 'app',
			wrap: true,
			optimize: 'none',
			stubModules: [ 'text.js', 'rv.js' ],
			insertRequire: [ 'app' ],

			paths: {
				Ractive: 'lib/Ractive-legacy',
				Statesman: 'lib/Statesman',
				Divvy: 'lib/Divvy'
			}
		}
	}
};
