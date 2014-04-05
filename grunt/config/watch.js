module.exports = {
	tutorials: {
		files: [ 'tutorials/**/*', 'root/**/*', 'templates/**/*' ],
		tasks: 'build'
	},
	sass: {
		files: [ 'scss/**/*.scss' ],
		tasks: 'sass:main'
	}
};
