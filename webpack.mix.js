const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


mix.js([
    'resources/js/jquery.js',
    'resources/js/bootstrap.js',
    'resources/js/jquery.blockUI.js',
    'resources/js/jquery.toast.js',
    'resources/js/select2.js',
    'resources/js/fileinput.min.js',
], 'public/js/all.js')
    .styles([
        'resources/css/bootstrap.css',
        'resources/css/fontawesome-all.min.css',
        'resources/css/bootstrap_rtl.css',
        'resources/css/jquery.toast.css',
        'resources/css/customize.css',
        'resources/css/select2.css',
        'resources/css/fileinput-rtl.min.css',
    ], 'public/css/all.css')
    .copy('resources/fonts','public/fonts');
