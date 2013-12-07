describe('profileStoreService', function () {
  'use strict';

  beforeEach(module('profileStoreService', 'glossaryApp'));


  describe('profileStore', function () {
    var getItemSpy, profileStore, LOCALSTORAGE_PROFILE_KEY;

    beforeEach(inject(function ($window) {
      getItemSpy = spyOn($window.localStorage, 'getItem');
    }));

    beforeEach(inject(function (_profileStore_, _LOCALSTORAGE_PROFILE_KEY_) {
      profileStore = _profileStore_;
      LOCALSTORAGE_PROFILE_KEY = _LOCALSTORAGE_PROFILE_KEY_;
    }));

    it('should load the profile from localStorage', function () {
      expect(getItemSpy).toHaveBeenCalledWith(LOCALSTORAGE_PROFILE_KEY);
    });
  });


});
