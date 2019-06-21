var gulp      = require('gulp'), // Подключаем Gulp
    sass      = require('gulp-sass');//Подключаем Sass пакет

gulp.task('sass', function(){ // Создаем таск Sass
    return gulp.src('sass/**/*.sass') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('watch', function() {
    gulp.watch('sass/**/*.sass', gulp.parallel('sass')); // Наблюдение за sass файлами
});
gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'));