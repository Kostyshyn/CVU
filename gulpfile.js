var gulp = require('gulp'),
	connect = require('gulp-connect'),
	concat = require('gulp-concat'),
	minify = require('gulp-minify-css'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	// sass = require('gulp-sass'),
	opn = require('opn');

// Запуск локального сервера
gulp.task('connect', function() {
	connect.server({
    	root: 'dist',
    	livereload: true,
    	port: 8888
    });
	opn('http://localhost:8888');
});

// HTML
gulp.task('html', function () {
	gulp.src('./dist/*.html')
		.pipe(connect.reload());
});

//CSS


//JS
gulp.task('js', function () {
	gulp.src([
			'./app/js/lib.js',
			'./app/js/slider.js',
			'./app/js/index.js'
		])
		.pipe(concat('build.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js/'))
    	.pipe(connect.reload());
});

//SASS
// gulp.task('sass', function () {
//     return gulp.src('./app/sass/**/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(minify())
//         .pipe(gulp.dest('./dist/css'))
//         .pipe(connect.reload());
// });

gulp.task('watch', function () {
	gulp.watch(['./dist/*.html'], ['html']);
	// gulp.watch(['./app/sass/**/*.scss'], ['sass']);
	gulp.watch(['./app/js/*.js'], ['js']);
});

gulp.task('default', ['connect', 'watch']);