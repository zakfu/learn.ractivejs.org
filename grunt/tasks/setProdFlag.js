module.exports = function ( grunt ) {

	'use strict';

	grunt.registerTask( 'setProdFlag', function () {
		grunt.config( 'prod', true );
	});

};
