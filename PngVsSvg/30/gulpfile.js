//引入gulp模块
const gulp=require('gulp');
//引入雪碧图合成插件
const spritesmith=require('gulp.spritesmith');
const svgSprite = require("gulp-svg-sprites");
const svgmin = require('gulp-svgmin');
gulp.task('spritesmith',function(){
    gulp.src('png/*.png')
        .pipe(spritesmith({
            imgName:'sprite.png',//保存合并后的名称
            cssName:'sprite.css',//保存合并后css样式的地址
            padding:5,//合并时两个图片的间距
            algorithm:'binary-tree'//注释1
            //cssTemplate:'dest/css/handlebarsStr.css'//注释2
        }))
        .pipe(gulp.dest('./png-sprite'));
});
gulp.task('sprites', function () {
    return gulp.src('svg/*.svg')
        .pipe(svgSprite({mode: "symbols"}))
        .pipe(gulp.dest("svg-sprite"));
});

gulp.task('svg-min',function () {
    return gulp.src('SvgVsIcon/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('./SvgVsIcon/out'));
});

gulp.task('svg-sprites', function () {
    return gulp.src('SvgVsIcon/out/*.svg')
        .pipe(svgSprite({mode: "symbols"}))
        .pipe(gulp.dest("SvgVsIcon"));
});
