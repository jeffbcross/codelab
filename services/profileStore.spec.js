'use strict';

describe('profileStore', function () {
  var getItemSpy, tdProfileStore, LOCALSTORAGE_PROFILE_KEY;

  beforeEach(module('todoApp'));

  beforeEach(inject(function ($window) {
    getItemSpy = spyOn($window.localStorage, 'getItem');
  }));

  beforeEach(inject(function (_tdProfileStore_, _LOCALSTORAGE_PROFILE_KEY_) {
    tdProfileStore = _tdProfileStore_;
    LOCALSTORAGE_PROFILE_KEY = _LOCALSTORAGE_PROFILE_KEY_;
  }));

  it('should load the profile from localStorage', function () {
    expect(getItemSpy).toHaveBeenCalledWith(LOCALSTORAGE_PROFILE_KEY);
  });


  describe('gravatarEmail', function () {
    var tdGravatarEmail, email, hashedEmail;

    beforeEach(inject( function (_tdGravatarEmail_) {
      email = 'foobar@gmail.com';
      hashedEmail = md5(email);
      tdGravatarEmail = _tdGravatarEmail_;
    }));


    it('should return a fully qualified url with a hashed email', function () {
      expect(tdGravatarEmail(email)).toBe('http://gravatar.com/avatar/' + hashedEmail);
    });


    it('should lowercase an email address', function () {
      expect(tdGravatarEmail('FOOBAR@GMAIL.COM')).toBe('http://gravatar.com/avatar/' + hashedEmail);
    });
  })
});
