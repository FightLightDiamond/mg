const mix = require('laravel-mix');
// console.log('process.env', process.env.DB_HOST)

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
// let proxy_url = process.env.BROWSERSYNC_PROXY_URL || 'localhost:4000';

mix.disableNotifications()
    // .browserSync({
    //     proxy: proxy_url,
    // })
    .react('asset/app.jsx', './js')
    .sass('asset/app.scss', './css');
