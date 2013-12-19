goog.provide('glossaryApp.gravatarImageFactory.module');
goog.provide('glossaryApp.gravatarImageFactory.gravatarImageFactory');

goog.require('goog.crypt.Md5');

/**
 * Factory for generating gravatar image URLs
 * @returns {angular.Module.factory}
 */
glossaryApp.gravatarImageFactory.gravatarImageFactory = function() {
  return function(email) {
    if (!goog.isString(email)) return;

    var hash = new goog.crypt.Md5();
    hash.update(email.toLowerCase());

    var resolved = goog.Uri.resolve('http://gravatar.com/avatar/',
        hash.digest());

    return resolved.toString();
  }
};

glossaryApp.gravatarImageFactory.module = angular['module'](
    'glossaryApp.gravatarImageFactory', []);

glossaryApp.gravatarImageFactory.module['factory'](
    'gravatarImage',
    glossaryApp.gravatarImageFactory.gravatarImageFactory);
