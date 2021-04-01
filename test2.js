// Load dependencies
const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');

  // Our test
  describe('Test', function() {
    // Get driver
    const driver = new Builder().forBrowser('firefox').
      build();

    //it('Title should be "The Internet"', function() {
    it('Title should be "The Internet"', async () => {
      // Set timeout to 10 seconds
      //this.timeout(10000);

      // Go to URL
      await driver.get('http://the-internet.herokuapp.com');
      await driver.sleep(2000);

      // Find the title and assert
      await driver.executeScript('return document.title').
        then(function(return_value) {
          assert.equal(return_value, 'The Internet')
        });

      // Quit webdriver
      after(async () => driver.quit());
    });
  });
