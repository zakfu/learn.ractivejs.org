module.exports = function ( grunt ) {

	'use strict';

	grunt.registerTask( 'build:prod', [
		'setProdFlag',
		'build',
		'requirejs',
		'uglify',
		'cssmin'
	]);

	grunt.registerTask( 'build', [
		'jshint',
		'clean:build',
		'copy:root',
		'sass:main',
		'concat',
		'spelunk:tutorials',
		'render'
	]);

};
