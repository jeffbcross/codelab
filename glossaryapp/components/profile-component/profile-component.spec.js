describe('glProfile', function () {
  'use strict';

  var getItemSpy, glProfileStore, scope, element;

  beforeEach(module('glossaryApp', 'components/profile-component/profile-component.html'));

  beforeEach(inject(function ($rootScope, $compile, _glProfileStore_, _LOCALSTORAGE_PROFILE_KEY_) {
    scope = $rootScope.$new();
    glProfileStore = _glProfileStore_;
    element = $compile('<gl-profile></gl-profile>')(scope);
    scope.$digest();
  }));


  it('should add a user to the scope', function () {
    glProfileStore.email = 'foo@bar';
    expect(element.controller('glProfile').profileStore.email).toBe('foo@bar');
  });
});
