var protractor = require('protractor');

describe('/terms', function () {
  var tractor = protractor.getInstance();

  beforeEach(function () {
    tractor.get('http://localhost:9080/#/terms');
  });

  describe('Add a Term form', function () {
    it('should let me create a new term ', function () {
      var emailInput = tractor.findElement(protractor.By.input('terms.currentUser.email'));
      emailInput.sendKeys('jeffbcross@github.com');

      var termInput = tractor.findElement(protractor.By.input('newTerm.name'));
      termInput.sendKeys('Protractor');

      var definitionInput = tractor.findElement(protractor.By.input('newTerm.definition'));
      definitionInput.sendKeys('An E2E testing framework essentially');

      var createTermForm = tractor.findElement(protractor.By.css('.createTermForm form'));
      createTermForm.submit();

      var listHTML = tractor.findElement(protractor.By.css('.termContent ul li:last-child'));
      expect(listHTML.getText()).toContain('An E2E testing framework essentially');
    });

    it('should update the avatar in the profile component after updating my email in the Add a Term Form',
      function () {
        var emailInput = tractor.findElement(protractor.By.input('terms.currentUser.email'));
        emailInput.click();
        emailInput.clear();
        emailInput.sendKeys('jeffbcross@github.com');

        var termInput = tractor.findElement(protractor.By.input('newTerm.name'));
        termInput.click();

        var avatar = tractor.findElement(protractor.By.css('gl-profile img'));
        expect(avatar.getAttribute('src')).toBe('http://gravatar.com/avatar/f7e06420125a495328529eaf537a4798');
      });
  });
});
