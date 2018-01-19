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
gulp.task("images",()=>{
	return gulp
				.src(["images/**/*"])
				.pipe(gulp.dest("dist/images"))
				.pipe(connect.reload());

})

gulp.task("watch",()=>{
	gulp.watch(["scss/*.scss","*.html","images/**/*","html/*.html"],["sass","html","images","shtml"]);
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