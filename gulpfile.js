// Load plugins
var gulp = require( 'gulp' ),
    compass = require( 'gulp-compass' ),
    sass = require( 'gulp-ruby-sass' ),
    autoprefixer = require( 'gulp-autoprefixer' ),
    minifycss = require( 'gulp-minify-css' ),
    jshint = require( 'gulp-jshint' ),
    uglify = require( 'gulp-uglify' ),
    imagemin = require( 'gulp-imagemin' ),
    rename = require( 'gulp-rename' ),
    clean = require( 'gulp-clean' ),
    concat = require( 'gulp-concat' ),
    notify = require( 'gulp-notify' ),
    cache = require( 'gulp-cache' ),
    livereload = require( 'gulp-livereload' ),
    lr = require( 'tiny-lr' ),
    server = lr();

// Content
gulp.task( 'content', function () {
    return gulp.src( [ 'src/**/*.html', 'src/**/*.html.*', 'src/**/*.php', 'src/**/*.php.*' ] )
        .pipe( gulp.dest( 'dist' ) )
        .pipe( livereload( server ) )
        .pipe( notify( {
            message: 'Content task complete'
        } ) );
} );

// Styles all
// gulp.task( 'styles', function () {
//     return gulp.src( 'src/css/**/*.css' )
//         .pipe( autoprefixer( 'last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4' ) )
//         .pipe( gulp.dest( 'dist/css' ) )
//         .pipe( rename( {
//             suffix: '.min'
//         } ) )
//         .pipe( minifycss() )
//         .pipe( gulp.dest( 'dist/css' ) )
//         .pipe( livereload( server ) )
//         .pipe( notify( {
//             message: 'Styles task complete'
//         } ) );

//     return gulp.src( [ 'src/css/fw_base.css', 'src/css/skeleton.css', 'src/css/fw_layout.css' ] )
//         .pipe( autoprefixer( 'last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4' ) )
//         .pipe( gulp.dest( 'dist/css' ) )
//         .pipe( rename( {
//             suffix: '.min'
//         } ) )
//         .pipe( minifycss() )
//         .pipe( concat( 'main.min.css' ) )
//         .pipe( gulp.dest( 'dist/css' ) )
//         .pipe( livereload( server ) )
//         .pipe( notify( {
//             message: 'Styles2 task complete'
//         } ) );
// } );

// Styles main min
gulp.task( 'styles-main', function () {
    return gulp.src( [ 'src/css/fw_base.css', 'src/css/skeleton.css', 'src/css/fw_layout.css' ] )
        .pipe( autoprefixer( 'last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4' ) )
        .pipe( gulp.dest( 'dist/css' ) )
        .pipe( rename( {
            suffix: '.min'
        } ) )
        .pipe( minifycss() )
        .pipe( concat( 'main.min.css' ) )
        .pipe( gulp.dest( 'dist/css' ) )
        .pipe( livereload( server ) )
        .pipe( notify( {
            message: 'Styles main task complete'
        } ) );
} );

// Styles home min
gulp.task( 'styles-home', function () {
    return gulp.src( [ 'src/css/fw_base.css', 'src/css/skeleton.css', 'src/css/fw_layout.css', 'src/css/plugins/camera.css' ] )
        .pipe( autoprefixer( 'last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4' ) )
        .pipe( gulp.dest( 'dist/css' ) )
        .pipe( rename( {
            suffix: '.min'
        } ) )
        .pipe( minifycss() )
        .pipe( concat( 'home.min.css' ) )
        .pipe( gulp.dest( 'dist/css' ) )
        .pipe( livereload( server ) )
        .pipe( notify( {
            message: 'Styles home task complete'
        } ) );
} );

// Styles work home pages min
gulp.task( 'styles-work-home', function () {
    return gulp.src( [ 'src/css/fw_base.css', 'src/css/skeleton.css', 'src/css/fw_layout.css', 'src/css/quicksand.css' ] )
        .pipe( autoprefixer( 'last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4' ) )
        .pipe( gulp.dest( 'dist/css' ) )
        .pipe( rename( {
            suffix: '.min'
        } ) )
        .pipe( minifycss() )
        .pipe( concat( 'work-home.min.css' ) )
        .pipe( gulp.dest( 'dist/css' ) )
        .pipe( livereload( server ) )
        .pipe( notify( {
            message: 'Styles work home task complete'
        } ) );
} );

// Styles work pages min
gulp.task( 'styles-work', function () {
    return gulp.src( [ 'src/css/fw_base.css', 'src/css/skeleton.css', 'src/css/fw_layout.css', 'src/css/plugins/elastislide.css', 'src/css/plugins/prettyPhoto.css', 'src/css/plugins/kickstart.css' ] )
        .pipe( autoprefixer( 'last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4' ) )
        .pipe( gulp.dest( 'dist/css' ) )
        .pipe( rename( {
            suffix: '.min'
        } ) )
        .pipe( minifycss() )
        .pipe( concat( 'work.min.css' ) )
        .pipe( gulp.dest( 'dist/css' ) )
        .pipe( livereload( server ) )
        .pipe( notify( {
            message: 'Styles work task complete'
        } ) );
} );

// Scripts
gulp.task( 'scripts', function () {
    return gulp.src( [ 'src/js/vendor/**/*.js', 'src/js/**/*.js' ] )
        .pipe( jshint( '.jshintrc' ) )
        .pipe( jshint.reporter( 'default' ) )
        // .pipe( concat( 'main.js' ) )
        // .pipe( gulp.dest( 'dist/js' ) )
        // .pipe( rename( {
        //     suffix: '.min'
        // } ) )
        // .pipe( uglify() )
        .pipe( livereload( server ) )
        .pipe( gulp.dest( 'dist/js' ) )
        .pipe( notify( {
            message: 'Scripts task complete'
        } ) );
} );


// Scripts home minifired
gulp.task( 'scripts-home', function () {
    return gulp.src( [ 'src/js/jquery.min.js', 'src/js/jquery-ui.min.js', 'src/js/jquery.elastislide.js', 'src/js/camera.min.js', 'src/js/jquery.prettyPhoto.js', 'src/js/fw_ui.js', 'src/js/fw_scripts.js' ] )
        .pipe( jshint( '.jshintrc' ) )
        .pipe( jshint.reporter( 'default' ) )
        .pipe( concat( 'home.min.js' ) )
        .pipe( uglify() )
        .pipe( gulp.dest( 'dist/js' ) )
        .pipe( livereload( server ) )
        .pipe( notify( {
            message: 'Scripts home task complete'
        } ) );
} );

// Scripts main minifired
gulp.task( 'scripts-main', function () {
    return gulp.src( [ 'src/js/jquery.min.js', 'src/js/jquery-ui.min.js', 'src/js/fw_ui.js', 'src/js/fw_scripts.js' ] )
        .pipe( jshint( '.jshintrc' ) )
        .pipe( jshint.reporter( 'default' ) )
        .pipe( concat( 'main.min.js' ) )
        .pipe( uglify() )
        .pipe( gulp.dest( 'dist/js' ) )
        .pipe( livereload( server ) )
        .pipe( notify( {
            message: 'Scripts main task complete'
        } ) );
} );

// Scripts work minifired
gulp.task( 'scripts-work', function () {
    return gulp.src( [ 'src/js/jquery.min.js', 'src/js/jquery-ui.min.js', 'src/js/jquery.prettyPhoto.js', 'src/js/fw_ui.js', 'src/js/fw_scripts.js' ] )
        .pipe( jshint( '.jshintrc' ) )
        .pipe( jshint.reporter( 'default' ) )
        .pipe( concat( 'work.min.js' ) )
        .pipe( uglify() )
        .pipe( gulp.dest( 'dist/js' ) )
        .pipe( livereload( server ) )
        .pipe( notify( {
            message: 'Scripts work task complete'
        } ) );
} );

// Scripts work-home minifired
gulp.task( 'scripts-work-home', function () {
    return gulp.src( [ 'src/js/jquery.min.js', 'src/js/jquery-ui.min.js', 'src/js/quicksand.js', 'src/js/fw_ui.js', 'src/js/fw_scripts.js' ] )
        .pipe( jshint( '.jshintrc' ) )
        .pipe( jshint.reporter( 'default' ) )
        .pipe( concat( 'work-home.min.js' ) )
        .pipe( uglify() )
        .pipe( gulp.dest( 'dist/js' ) )
        .pipe( livereload( server ) )
        .pipe( notify( {
            message: 'Scripts work-home task complete'
        } ) );
} );

// Images
gulp.task( 'images', function () {
    return gulp.src( 'src/images/**/*' )
        .pipe( cache( imagemin( {
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        } ) ) )
        .pipe( gulp.dest( 'dist/images' ) )
        .pipe( livereload( server ) )
        .pipe( notify( {
            message: 'Images task complete'
        } ) );
} );

// Clean
gulp.task( 'clean', function () {
    return gulp.src( [ 'dist/css', 'dist/js', 'dist/images' ], {
            read: false
        } )
        .pipe( clean() );
} );

// Reload
gulp.task( 'reload', function () {
    return gulp.pipe( livereload( server ) );
} );

// Default task
gulp.task( 'default', [ 'clean' ], function () {
    gulp.start( 'content', 'styles', 'scripts', 'images' );
} );

// Watch
gulp.task( 'watch', function () {

    // Listen on port 35729
    server.listen( 35729, function ( err ) {
        if ( err ) {
            return console.log( err )
        };

        // Watch .html files
        gulp.watch( [ 'src/**/*.html', 'src/**/*.php' ], [ 'content' ] );

        // Watch .scss files
        gulp.watch( 'src/css/**/*.css', [ 'styles-main', 'styles-home', 'styles-work', 'styles-work-home' ] );

        // Watch .js files
        gulp.watch( 'src/js/**/*.js', [ 'scripts' ] );
        gulp.watch( 'src/js/**/*.js', [ 'scripts', 'scripts-main', 'scripts-home', 'scripts-work', 'scripts-work-home' ] );

        // Watch image files
        gulp.watch( 'src/images/**/*', [ 'images' ] );

    } );

} );