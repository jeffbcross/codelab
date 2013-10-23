describe('/terms', function () {
  var tractor = protractor.getInstance();
  var termId;
  var termsUrl = 'http://localhost:9080/#/terms';
  var termDetailUrl;

  //Note: A term must exist in order for this E2E test to work
  beforeEach(function () {
    //Let's set an id for a term to test once for all of our tests.
    runs(function () {
      if (termId) return;
      tractor.get(termsUrl).then(function () {
        var termLink = tractor.findElement(protractor.By.css('.termContent ul li a'));
        termLink.getAttribute('href').then(function (href) {
          var hrefExp = new RegExp('\/([0-9]*)$');
          termId = hrefExp.exec(href)[1];
        });
      });
    });

    waitsFor(function () {
      return termId;
    }, 'termId to be defined', 5000);

    runs(function () {
      termDetailUrl = 'http://localhost:9080/#/terms/' + termId;
      tractor.get(termDetailUrl);
    });
  });


  describe('Editable Definition', function () {
    it('should let me edit the term name twice and persist between refreshes', function () {
      var definitionHeader = tractor.findElement(protractor.By.css('.termHeading h1[contenteditable]'));
      definitionHeader.clear();
      definitionHeader.sendKeys('Renamed Definition 1');

      tractor.sleep(500);

      tractor.get(termDetailUrl);

      definitionHeader = tractor.findElement(protractor.By.css('.termHeading h1[contenteditable]'));

      expect(definitionHeader.getText()).toBe('Renamed Definition 1');

      definitionHeader.clear();
      definitionHeader.sendKeys('Renamed Definition 2');

      tractor.sleep(500);

      tractor.get(termDetailUrl);

      definitionHeader = tractor.findElement(protractor.By.css('.termHeading h1[contenteditable]'));

      expect(definitionHeader.getText()).toBe('Renamed Definition 2');
    });

    it('should let me edit the term definition twice and persist between refreshes', function () {
      var termDefinition = tractor.findElement(protractor.By.css('.termHeading div[contenteditable]'));
      termDefinition.clear();
      termDefinition.sendKeys('Redefined Term 1');

      tractor.sleep(500);

      tractor.get(termDetailUrl);

      termDefinition = tractor.findElement(protractor.By.css('.termHeading div[contenteditable]'));

      expect(termDefinition.getText()).toBe('Redefined Term 1');

      termDefinition.clear();
      termDefinition.sendKeys('Redefined Term 2');

      tractor.sleep(500);

      tractor.get(termDetailUrl);

      termDefinition = tractor.findElement(protractor.By.css('.termHeading div[contenteditable]'));

      expect(termDefinition.getText()).toBe('Redefined Term 2');
    });
  });
});
