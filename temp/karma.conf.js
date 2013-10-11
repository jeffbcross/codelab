module.exports = function (config) {
  config.set({
    plugins: ['karma-jasmine', 'karma-chrome-launcher'],
    frameworks: ['jasmine'],
    basePath: '../',
    files: [
      'temp/angular.js',
      'temp/angular-resource.js',
      'temp/angular-route.js',
      'app.js',
      '_directives/*.js',
      '_factories/*.js',
      '_services/*.js',
      '*.js'
    ],
    autoWatch: true,
    browsers: ['Chrome']
  });
};
