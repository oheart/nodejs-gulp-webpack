var gulp = require("gulp");
var gulp_tpl = require("gulp-template");
gulp.task("page",function(){
    gulp.src(["index.html"])
        .pipe(gulp_tpl(
            {
                "age":18
            }
        ))
        .pipe(gulp.dest('./build/html'));
});