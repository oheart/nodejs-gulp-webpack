var gulp = require("gulp");
var gulp_concat = require("gulp-concat");
var gulp_uglify = require("gulp-uglify");
var gulp_webpack = require("gulp-webpack");
var webpack_config = require("./webpack.config.js");
var webpack = require("webpack"); //使用独立安装的webpack(node_module中的webpack)，而不是全局的webpack
gulp.task("test",function(){
    gulp.src(["1.js"])
        .pipe(gulp_webpack(webpack_config,webpack)) //编译
        .pipe(gulp_uglify()) //压缩
        .pipe(gulp.dest("./build/js"));
});