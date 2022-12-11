const minify = require("gulp-minify");

gulp.task("js", function () {
  gulp.src(["lib/*.js", "lib/*.mjs"]).pipe(minify()).pipe(gulp.dest("dist"));
});
