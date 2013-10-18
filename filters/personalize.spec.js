describe('personalize', function () {
  var filter, tdProfileStore;

  beforeEach(module('todoApp'));

  beforeEach(inject(function ($filter, _tdProfileStore_) {
    filter = $filter('personalize');
    tdProfileStore = _tdProfileStore_;
  }));


  it('should return You if email matches the current user', function () {
    tdProfileStore.email = 'foo@bar.com';
    expect(filter('foo@bar.com')).toBe('You');
  });


  it('should return the input if email does not match the current user', function () {
    tdProfileStore.email = 'foo@bar.com';
    expect(filter('bar@baz.com')).toBe('bar@baz.com');
  })
});