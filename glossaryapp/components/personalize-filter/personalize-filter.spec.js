describe('personalize', function () {
  'use strict';

  var filter, profileStore;

  beforeEach(module('personalizeFilter', 'profileStoreService'));

  beforeEach(inject(function ($filter, _profileStore_) {
    filter = $filter('personalize');
    profileStore = _profileStore_;
  }));


  it('should return You if email matches the current user', function () {
    profileStore.email = 'foo@bar.com';
    expect(filter('foo@bar.com')).toBe('You');
  });


  it('should return the input if email does not match the current user', function () {
    profileStore.email = 'foo@bar.com';
    expect(filter('bar@baz.com')).toBe('bar@baz.com');
  })
});