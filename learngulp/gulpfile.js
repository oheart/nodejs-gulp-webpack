var gulp = require("gulp");
var gulp_concat = require("gulp-concat");
var gulp_uglify = require("gulp-uglify");

//测试
gulp.task("test",function(){
    console.log("I am gulp");
});

//把js和css放入build里
gulp.task("build",function(){
    gulp.src(["*.js","!gulpfile.js"])
        .pipe(gulp.dest("./build/js"));
    gulp.src(["*.css"])
        .pipe(gulp.dest("./build/css"));
   // src | dest
});

//合并
gulp.task("concat",function(){
    gulp.src(["1.js","2.js"])
        .pipe(gulp_concat("main.js"))
        .pipe(gulp.dest("./build/js"));
    gulp.src("*.css")
        .pipe(gulp.dest("./build/css"));
})

//压缩
gulp.task("uglify",function(){
    gulp.src(["1.js","2.js"])
        .pipe(gulp_concat("main.js"))  //合并
        .pipe(gulp_uglify())          //压缩
        .pipe(gulp.dest("./build/js"));
    gulp.src(["*.css"])
        .pipe(gulp.dest("./build/css"));
})



























