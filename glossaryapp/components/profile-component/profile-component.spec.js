describe('glProfile', function () {
  'use strict';

  var getItemSpy, profileStore, scope, element;

  beforeEach(module('glossaryApp', 'components/profile-component/profile-component.html'));

  beforeEach(inject(function ($rootScope, $compile, _profileStore_, _LOCALSTORAGE_PROFILE_KEY_) {
    scope = $rootScope.$new();
    profileStore = _profileStore_;
    element = $compile('<gl-profile></gl-profile>')(scope);
    scope.$digest();
  }));


  it('should add a user to the scope', function () {
    profileStore.email = 'foo@bar';
    expect(element.controller('glProfile').profileStore.email).toBe('foo@bar');
  });
});
