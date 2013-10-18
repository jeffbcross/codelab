describe('tdProfile', function () {
  var getItemSpy, tdProfileStore, scope, element;

  beforeEach(module('todoApp', 'components/profile/profile.html'));

  beforeEach(inject(function ($rootScope, $compile, _tdProfileStore_, _LOCALSTORAGE_PROFILE_KEY_) {
    scope = $rootScope.$new();
    tdProfileStore = _tdProfileStore_;
    element = $compile('<td-profile></td-profile>')(scope);
    scope.$digest();
  }));


  it('should create an isolate scope', function () {
    expect(scope.user).toBeFalsy();
    expect(element.scope().user).toBeTruthy();
  });


  describe('ProfileController', function () {
    it('should add a user to the scope', function () {
      tdProfileStore.email = 'foo@bar';
      expect(element.scope().user.email).toBe('foo@bar');
    });
  });
});
