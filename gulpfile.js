var gulp = require('gulp'),
	connect = require('gulp-connect'),
	concat = require('gulp-concat'),
	minify = require('gulp-minify-css'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
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
gulp.task('css', function () {
	gulp.src([
			'./app/bower/normalize-css/normalize.css',
			'./app/bower/flexboxgrid/dist/flexboxgrid.css',
			'./app/css/index.css'
		])
		.pipe(minify())
		.pipe(concat('style.css'))
		.pipe(rename({
			basename: 'style',
			extname: '.min.css'
		}))
		.pipe(gulp.dest('./dist/css/'))
		.pipe(connect.reload());
});

//JS
gulp.task('js', function () {
	gulp.src([
			'./app/js/lib.js',
			'./app/js/index.js',
			'./app/js/slider.js'
		])
		.pipe(concat('build.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js/'))
    	.pipe(connect.reload());
});

//SASS
gulp.task('sass', function () {
    return gulp.src('./app/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/css'));
});

gulp.task('watch', function () {
	gulp.watch(['./dist/*.html'], ['html']);
	gulp.watch(['./app/sass/**/*.scss', './app/css/*.css'], ['sass', 'css']);
	gulp.watch(['./app/js/*.js'], ['js']);
});

gulp.task('default', ['connect', 'watch']);