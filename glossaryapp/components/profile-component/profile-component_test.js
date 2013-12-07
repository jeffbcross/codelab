describe('profileComponent', function () {
  'use strict';

  beforeEach(module('profileComponent', 'glossaryApp', 'components/profile-component/profile-component.html'));


  describe('glProfile', function () {
    var getItemSpy, profileStore, scope, element;

    beforeEach(inject(function ($rootScope, $compile, _profileStore_) {
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
});
