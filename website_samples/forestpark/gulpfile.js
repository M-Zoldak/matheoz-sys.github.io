const {src, dest, series, parallel, watch} = require('gulp')
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const clean = require('gulp-clean');
const kit = require('gulp-kit');

const paths = {
  sass: './src/sass/**/*.scss',  //<--FROM  ---  TO->css
  css: './dist/css',
  jsSrc: 'src/js/**/*.js',
  jsDest: './dist/js',
  imgSrc: 'src/img/*',
  imgDest: './dist/img',
  sources: './src',
  dist: './dist',
  html: './html/**/*.kit'
}

function codeCompiler(done){
    src(paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(dest(paths.css))
    .pipe(sourcemaps.init())
    .pipe(cssnano())
    .pipe(rename(function (path) {
      path.extname = ".min.css";
    }))
    .pipe(sourcemaps.write())
    .pipe(dest(paths.css));
    done();
}

function scriptCompiler(done){
    src(paths.jsSrc)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write())
        .pipe(dest(paths.jsDest))
  done()
}

function imagesMumify(done){
  src(paths.imgSrc)
  .pipe(imagemin())
  .pipe(dest(paths.imgDest));
  done();
}
function startBrowserSync(done){
  browserSync.init({
    server: {
        baseDir: "./",
    },
    tunnel: true,
    tunnel: "mzsite"
});
  done();
}
function watch4changes(done){
  watch('./*.html').on('change', reload);
  watch([paths.html, paths.sass, paths.jsSrc], parallel(codeCompiler, scriptCompiler, createHTML)).on('change', reload);
  watch(paths.imgSrc, imagesMumify).on('change', reload);
  done();
}
function cleanStuff(done){
  src(paths.dist, {read: false})
  .pipe(clean());
  done();
}

function createHTML(done){
  src(paths.html)
  .pipe(kit())
  .pipe(dest('./'));
  done();
}

exports.cleanStuff = cleanStuff;
const mainFunctions = parallel(codeCompiler, scriptCompiler, imagesMumify, createHTML);
exports.default = series(mainFunctions, startBrowserSync, watch4changes);