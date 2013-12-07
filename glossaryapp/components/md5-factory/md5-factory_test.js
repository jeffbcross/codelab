describe('md5Factory', function () {
  'use strict';

  beforeEach(module('md5Factory'));


  describe('md5', function () {
    var md5;

    beforeEach(inject(function (_md5_) {
      md5 = _md5_;
    }));


    it('should return a hash of the input', function () {
      expect(md5('jeffbcross@github.com')).toBe('f7e06420125a495328529eaf537a4798');
    });
  });
});