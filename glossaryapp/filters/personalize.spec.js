describe('personalize', function () {
  var filter, glProfileStore;

  beforeEach(module('glossaryApp'));

  beforeEach(inject(function ($filter, _glProfileStore_) {
    filter = $filter('personalize');
    glProfileStore = _glProfileStore_;
  }));


  it('should return You if email matches the current user', function () {
    glProfileStore.email = 'foo@bar.com';
    expect(filter('foo@bar.com')).toBe('You');
  });


  it('should return the input if email does not match the current user', function () {
    glProfileStore.email = 'foo@bar.com';
    expect(filter('bar@baz.com')).toBe('bar@baz.com');
  })
});