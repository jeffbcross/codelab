describe('Term', function () {
  var Term, TERMS_PATH, $httpBackend;

  beforeEach(module('termResource', 'glossaryApp'));

  beforeEach(inject(function (_Term_, _TERMS_PATH_, _$httpBackend_) {
    TERMS_PATH = _TERMS_PATH_;
    Term = _Term_;
    $httpBackend = _$httpBackend_;
  }));


  it('should have an update method', function () {
    expect(typeof Term.update).toBe('function');
  });


  it('should try to update an item when calling update', function () {
    var spyable = {
      success: function (data, headers) {}
    };
    var spy = spyOn(spyable, 'success');

    $httpBackend.whenPUT(TERMS_PATH + '/1').respond(200);

    Term.update({id: 1}, {text: 'Do it'}, spyable.success);
    $httpBackend.flush();

    expect(spy).toHaveBeenCalled();
  });
});