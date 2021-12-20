/* eslint-disable global-require */

const gulp = require('gulp');
const swc = require('gulp-swc');
const fs = require('fs');
const alias = require('gulp-ts-alias');
const ts = require('gulp-typescript');

const swcrcPath = '.swcrc';
const distPath = './dist';

const delayInMS = 1000;

const tsProject = ts.createProject('tsconfig.json', {
  typescript: require('typescript'),
});

const swcrc = fs.readFileSync(swcrcPath);
const swcConfig = JSON.parse(swcrc);

const srcFiles = ['src/**/*.{js,ts}', '!src/**/*.{test.js,test.ts}'];

function build() {
  return gulp
    .src(srcFiles, {
      sourcemaps: false,
      since: gulp.lastRun(build),
    })
    .pipe(alias({ configuration: tsProject.config }))
    .pipe(swc(swcConfig))
    .pipe(gulp.dest(distPath));
}

function watchScript() {
  return gulp.watch(
    srcFiles,
    {
      ignoreInitial: true,
      delay: delayInMS,
    },
    build,
  );
}

const buildTask = gulp.parallel(build);

exports.default = buildTask;
exports.watch = gulp.parallel(watchScript);
