module.exports = function (config) {
  config.set({
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-ng-html2js-preprocessor'
    ],
    frameworks: ['jasmine'],
    basePath: '../../',
    exclude: [
      'dpd/',
      'dpd/*'
    ],
    files: [
      'glossaryapp/scripts/angular.js',
      'glossaryapp/scripts/angular-*.js',
      'glossaryapp/scripts/md5.js',
      'glossaryapp/app.js',
      'glossaryapp/components/**/*.js',
      'glossaryapp/*.js',
      'glossaryapp/components/**/*.html',
      'glossaryapp/terms/detail/*.js',
      'glossaryapp/terms/*.js'
    ],
    preprocessors: {
      'glossaryapp/components/**/*.html': ['ng-html2js']
    },
    autoWatch: true,
    browsers: ['Chrome']
  });
};
