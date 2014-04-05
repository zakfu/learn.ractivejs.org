module.exports = {
	root: {
		files: [{
			cwd: 'root',
			src: '**/*',
			expand: true,
			dest: 'build'
		}]
	},

	js: {
		files: [{
			cwd: 'js',
			src: '**/*',
			expand: true,
			dest: 'build/js'
		}]
	}
};
