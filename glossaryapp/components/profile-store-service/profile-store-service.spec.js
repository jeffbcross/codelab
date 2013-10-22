describe('profileStore', function () {
  'use strict';

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
});
