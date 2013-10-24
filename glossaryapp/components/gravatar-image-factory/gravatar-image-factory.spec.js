describe('gravatarImageFactory', function () {
  'use strict';

  var md5;

  beforeEach(module('gravatarImageFactory'));


  describe('gravatarImage', function () {
    var gravatarImage, email, hashedEmail;
    beforeEach(inject( function (_gravatarImage_, _md5_) {
      md5 = _md5_;
      email = 'foobar@gmail.com';
      hashedEmail = md5(email);
      gravatarImage = _gravatarImage_;
    }));


    it('should return a fully qualified url with a hashed email', function () {
      expect(gravatarImage(email)).toBe('http://gravatar.com/avatar/' + hashedEmail);
    });


    it('should lowercase an email address', function () {
      expect(gravatarImage('FOOBAR@GMAIL.COM')).toBe('http://gravatar.com/avatar/' + hashedEmail);
    });


    it('should return undefined if the input is not a string', function () {
      expect(gravatarImage(function () {})).toBeUndefined();
    });
  });
});
