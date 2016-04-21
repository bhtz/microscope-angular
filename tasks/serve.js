var gulp        = require('gulp');
var connect     = require('gulp-connect');
var open        = require('gulp-open');
var runSequence = require('run-sequence');

// run connect server
gulp.task('connect', function() {
	connect.server({
		root: 'www',
		port: 3000,
		livereload: true
	});
});

// open default browser
gulp.task('open', function(){
	return gulp.src('')
		.pipe(open({uri: 'http://localhost:3000'}));
});

// serve task => build & connect
gulp.task('serve', function (cb) {
	runSequence('clean', 'assets', 'templates','watch', 'connect', 'open',cb);
});