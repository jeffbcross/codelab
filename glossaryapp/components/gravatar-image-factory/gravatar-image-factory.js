goog.provide('glosssaryApp.gravatarImageFactory.module');
goog.provide('glosssaryApp.gravatarImageFactory.gravatarImageFactory');

goog.require('goog.crypt.Md5');

/**
 * Factory for generating gravatar image URLs
 * @returns {angular.Module.factory}
 */
glossaryApp.gravatarImageFactory.gravatarImageFactory = function () {
  return function (email) {
    if (!angular.isString(email)) return;

    var hash = new goog.crypt.Md5();
    hash.update(email.toLowerCase());

    var resolved = goog.Uri.resolve('http://gravatar.com/avatar/',
        hash.digest());

    return resolved.toString();
  }
};

glossaryApp.gravatarImageFactory.module = angular.module(
    'glossaryApp.gravatarImageFactory', []).
factory(
    'glossaryApp.gravatarImageFactory.gravatarImageFactory',
    glossaryApp.gravatarImageFactory.gravatarImageFactory);
