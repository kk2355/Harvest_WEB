var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var uglify = require('gulp-uglify'); // gulp-uglifyを読み込む

gulp.task('server', function () {
  browserSync({
    notify: false,
    server: {
      baseDir: "html"
    }
  });

  gulp.watch('html/**/*.html', reload);
});