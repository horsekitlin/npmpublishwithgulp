const gulp = require("gulp");
const babel = require("gulp-babel");

gulp.task("compile", () => {
  return gulp
    .src("./src/**/*.js")
    .pipe(
      babel({
        presets: ["es2015", "stage-2"],
        plugins: []
      })
    )
    .pipe(gulp.dest("./build"));
});

gulp.task("default", ["compile"]);
