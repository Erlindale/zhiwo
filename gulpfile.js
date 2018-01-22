const gulp = require("gulp");
const sass = require("gulp-sass-china");
const babel = require("gulp-babel");
const connect = require("gulp-connect");
const images = require("gulp-imagemin");
gulp.task("html",()=>{
	return gulp
				.src(["*.html"])
				.pipe(gulp.dest("dist"))
				.pipe(connect.reload());

})
gulp.task("shtml",()=>{
	return gulp.src(["html/*.html"])
				.pipe(gulp.dest("dist/html"))
				.pipe(connect.reload());
})
gulp.task('scripts',() => {
    return gulp
        .src('scripts/**/*.js')
        .pipe(gulp.dest('dist/scripts'))//*代表所有
        .pipe(connect.reload());
} );

gulp.task("images",()=>{
	return gulp
				.src(["images/**/*"])
				.pipe(gulp.dest("dist/images"))
				.pipe(connect.reload());

})
gulp.task('data',() => {
    return gulp
        .src('data/*.json')
        .pipe(gulp.dest('dist/data'))//*代表所有
} );
gulp.task("watch",()=>{
	gulp.watch(["scss/*.scss","*.html","images/**/*","html/*.html","scripts/**/*.js", "data/*.json"],["sass","html","images","shtml","scripts", "data"]);
})
gulp.task("server",function(){
	connect.server({
		root:"dist",
		port:8888,
		livereload:true
	})
})
gulp.task("sass",()=>{
	return gulp.src("scss/*.scss")
				.pipe(sass().on('error',sass.logError))
				.pipe(gulp.dest("dist/css"));
})
gulp.task("default",["watch","server"]);