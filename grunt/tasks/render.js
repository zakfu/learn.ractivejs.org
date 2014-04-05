module.exports = function ( grunt ) {

	'use strict';

	grunt.registerTask( 'render', function () {
		var Ractive, template, tutorials, redirect, ractive, rendered, manifest;

		Ractive = require( 'ractive' );

		template = grunt.file.read( 'templates/tutorial.html' );
		redirect = grunt.file.read( 'templates/redirect.html' );

		// Gather tutorial data
		tutorials = grunt.file.readJSON( grunt.config( 'dir2json.tutorials.dest' ) );

		// Create a manifest - need to know what tutorials we've got
		// and how many steps there are
		manifest = {};
		manifest.tutorials = tutorials.map( function ( tutorial ) {
			return {
				title: tutorial.title,
				length: tutorial.steps.length
			};
		});

		// Render index.html
		ractive = new Ractive({
			template: redirect,
			data: {
				destination: slugify( tutorials[0].title ) + '/1'
			},
			preserveWhitespace: true,
			delimiters: [ '[[', ']]' ],
			tripleDelimiters: [ '[[[', ']]]' ]
		});

		rendered = ractive.toHTML();
		grunt.file.write( 'build/index.html', rendered );


		// Render tutorial pages
		tutorials.forEach( function ( tutorial, i ) {
			var rendered = new Ractive({
				template: redirect,
				data: { destination: '1' },
				delimiters: [ '[[', ']]' ],
				tripleDelimiters: [ '[[[', ']]]' ]
			}).toHTML();

			grunt.file.write( 'build/' + slugify( tutorial.title ) + '/index.html', rendered );

			tutorial.steps.forEach( function ( step, j ) {
				var rendered;

				manifest.tutorialIndex = i;
				manifest.stepIndex = j;
				manifest.step = step;

				if ( tutorial.styles ) {
					step.styles = ( step.styles ? step.styles + tutorial.styles : tutorial.styles );
				}

				rendered = new Ractive({
					template: template,
					data: {
						title: tutorial.title + ' (' + ( j + 1 ) + '/' + tutorial.steps.length + ') | Learn Ractive.js',
						manifest: JSON.stringify( manifest ),
						prod: grunt.config( 'prod' )
					},
					preserveWhitespace: true,
					delimiters: [ '[[', ']]' ],
					tripleDelimiters: [ '[[[', ']]]' ]
				}).toHTML();

				grunt.file.write( 'build/' + slugify( tutorial.title ) + '/' + ( j + 1 ) + '/index.html', rendered );
				grunt.file.write( 'build/data/' + i + '/' + j + '.json', JSON.stringify( step ) );
			});
		});
	});

};
