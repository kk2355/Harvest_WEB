var gulp = require('gulp');
var browsersync = require('browser-sync');
var browserify = require('browserify');
var riotify = require('riotify');
var source = require('vinyl-source-stream');

// コンパイル
gulp.task('concat', function () {
  return browserify({
    debug: true,
    entries: ['./src/main.js']
  }).transform([riotify])
    .bundle()
    .pipe(source('main.bundle.js'))
    .pipe(gulp.dest('./dest/'))
    .pipe(browsersync.stream());
});

gulp.task('server', function () {
  browsersync.init({
    server: {
      baseDir: 'dest'
    },
    open: false,
  });
});

// 監視
gulp.task('default', ['server'], function() {
  gulp.watch("./dest/*", function() {
    browsersync.reload();
  });
  gulp.watch("./src/**/*.js", ['concat']);
  gulp.watch("./src/**/*.tag", ['concat']);
});

// エレクターズサーバ内で実行させるタスク
gulp.task('compile', function () {
  return browserify({
    debug: true,
    entries: ['./src/main.js']
  }).transform([riotify])
    .bundle()
    .pipe(source('main.bundle.js'))
    .pipe(gulp.dest('/var/www/html/harvest_dest/'))
    .pipe(browsersync.stream());
});