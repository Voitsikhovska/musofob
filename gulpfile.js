const gulp = require('gulp')
const less = require('gulp-less')

const browserSync = require('browser-sync').create()
const sourcemaps = require('gulp-sourcemaps')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')
const paths = {
    styles:{
        src:'app/styles/**/*.less',
        dest:'dist/css/'
    },
    scripts:{
        src:'app/scripts/**/*.js',
        dest:'dist/js/'
    },
    images:{
        src: 'app/img/*',
        dest: 'dist/images'
    },
    html:{
        src:'./*.html',
        dest: 'dist'
    }
}
function html(){
    return gulp.src(paths.html.src)
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest(paths.html.dest))
      .pipe(browserSync.stream())
  }

  function styles(){
    return gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(cleanCSS({
        level:2
    }))
    .pipe(rename({
        basename:'main',
        suffix: '.min'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream())
}
//для скриптів
function scripts(){
    return gulp.src(paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets:['@babel/env']
    }))
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.stream())
}

//відслідковування змін
function watch(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })
    gulp.watch(paths.html.dest).on('change',browserSync.reload)
    gulp.watch(paths.html.src, html)
    gulp.watch(paths.styles.src, styles)
    gulp.watch(paths.scripts.src, scripts)
}
const build = gulp.series( html, gulp.parallel(styles, scripts), watch)
exports.styles = styles
exports.scripts = scripts
exports.watch = watch
exports.html = html
exports.build = build
exports.default = build