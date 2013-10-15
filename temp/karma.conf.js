module.exports = function (config) {
  config.set({
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-ng-html2js-preprocessor'
    ],
    frameworks: ['jasmine'],
    basePath: '../',
    files: [
      'temp/angular.js',
      'temp/angular-*.js',
      'app.js',
      '_directives/*.js',
      '_factories/*.js',
      '_filters/*.js',
      '_services/*.js',
      '*.js',
      '_directives/*.html'
    ],
    preprocessors: {
      '_directives/*.html': ['ng-html2js']
    },
    autoWatch: true,
    browsers: ['Chrome']
  });
};
