module.exports = {
	files: [
		'js/**/*.js',
		'!js/bundle/**/*.js',
		'!js/lib/**/*.js',
		'!js/require.js',
		'!js/text.js',
		'!js/domReady.js'
	],
	options: {
		undef: true,
		unused: true,
		globals: {
			define: true,
			window: true,
			XMLHttpRequest: true,
			document: true,
			prettyPrint: true,
			CodeMirror: true,
			ga: true,
			setTimeout: true
		}
	}
};
