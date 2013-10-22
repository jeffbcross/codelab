'use strict';

describe('profileStore', function () {
  var getItemSpy, glProfileStore, LOCALSTORAGE_PROFILE_KEY;

  beforeEach(module('glossaryApp'));

  beforeEach(inject(function ($window) {
    getItemSpy = spyOn($window.localStorage, 'getItem');
  }));

  beforeEach(inject(function (_glProfileStore_, _LOCALSTORAGE_PROFILE_KEY_) {
    glProfileStore = _glProfileStore_;
    LOCALSTORAGE_PROFILE_KEY = _LOCALSTORAGE_PROFILE_KEY_;
  }));

  it('should load the profile from localStorage', function () {
    expect(getItemSpy).toHaveBeenCalledWith(LOCALSTORAGE_PROFILE_KEY);
  });


  describe('gravatarEmail', function () {
    var glGravatarEmail, email, hashedEmail;

    beforeEach(inject( function (_glGravatarEmail_) {
      email = 'foobar@gmail.com';
      hashedEmail = md5(email);
      glGravatarEmail = _glGravatarEmail_;
    }));


    it('should return a fully qualified url with a hashed email', function () {
      expect(glGravatarEmail(email)).toBe('http://gravatar.com/avatar/' + hashedEmail);
    });


    it('should lowercase an email address', function () {
      expect(glGravatarEmail('FOOBAR@GMAIL.COM')).toBe('http://gravatar.com/avatar/' + hashedEmail);
    });


    it('should return undefined if the input is not a string', function () {
      expect(glGravatarEmail(function () {})).toBeUndefined();
    });
  });
});
