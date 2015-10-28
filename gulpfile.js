var gulp = require('gulp');
var util = require('gulp-util');
var ugly = require('gulp-uglify');
var sass = require('gulp-sass');
var html = require('gulp-htmlmin');
var mcss = require('gulp-cssmin');
var sync = require('browser-sync');
var htmllint = require('gulp-htmllint');
var csslint = require('gulp-csslint');
var jslint = require('gulp-jslint');

gulp.task('js', function(){
  util.log(util.colors.green('Crunching Hard...'));
  gulp.src('app/js/*.js')
    .pipe(ugly({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/src/js'))
    .pipe(sync.reload({
      stream: true
    }))
  util.log(util.colors.green('Done!'));
});

gulp.task('css', function(){

  util.log(util.colors.green('Minifying Hard...'));
  gulp.src('app/css/*.css')
    .pipe(mcss({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/src/css'))
    .pipe(sass())
    .pipe(gulp.dest('dist/src/css'))
    .pipe(sync.reload({
      stream: true
    }))
  util.log(util.colors.green('Done!'));

});

gulp.task('html', function(){
  util.log(util.colors.green('Mashing Hard...'));
  gulp.src('app/views/*.html')
    .pipe(html())
    .pipe(html({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/src/views'))
    .pipe(sync.reload({
      stream: true
    }))
  util.log(util.colors.green('Done!'));
});

gulp.task('sync', function(){
  sync({
    server: {
      baseDir: 'dist/src/views'
    },
  });
});

gulp.task('watch', function(){
  gulp.watch('app/css/*.css', ['css']);
  gulp.watch('app/js/*.js', ['js']);
  gulp.watch('app/views/*.html', ['html']);
});

gulp.task('default', ['sync' ,'watch']);
