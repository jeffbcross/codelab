describe('glProfile', function () {
  var getItemSpy, glProfileStore, scope, element;

  beforeEach(module('glossaryApp', 'components/profile/profile.html'));

  beforeEach(inject(function ($rootScope, $compile, _glProfileStore_, _LOCALSTORAGE_PROFILE_KEY_) {
    scope = $rootScope.$new();
    glProfileStore = _glProfileStore_;
    element = $compile('<gl-profile></gl-profile>')(scope);
    scope.$digest();
  }));


  it('should create an isolate scope', function () {
    expect(scope.user).toBeFalsy();
    expect(element.scope().user).toBeTruthy();
  });


  describe('ProfileController', function () {
    it('should add a user to the scope', function () {
      glProfileStore.email = 'foo@bar';
      expect(element.scope().user.email).toBe('foo@bar');
    });
  });
});
