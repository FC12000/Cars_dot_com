// Load dependencies
const { Builder, By, Key, util } = require('selenium-webdriver');
var assert = require('assert'); // Node.js assert module
//const { expect, assert } = require('chai');


  // Our test
  describe('Basic test to make sure things are working', function() {
  // If using Mocha, then do not use arrow functions which bind this and cannot access 
  // the Mocha context.
  // Source: https://mochajs.org/#arrow-functions
  //describe('Basic test to make sure things are working', () => {
    // Get driver
    const driver = new Builder().forBrowser('firefox').
      build();

    it('Title should be "The Internet"', async function() {
    //it('Title should be "The Internet"', async () => {
      // Set timeout to 10 seconds
      //this.timeout(10000);

      // Go to URL
      await driver.get('https://the-internet.herokuapp.com');
      //await driver.sleep(5000);

      // Find the title and assert

      // Selenium test
      await driver.executeScript('return document.title').
        then(function(return_value) {
          assert.equal(return_value, 'The Internet');
        });
    });

  it.skip('Title should be "The Internet"', async function() {
      // Chai version of the test above
      const title = await driver.getTitle();
      expect(title).to.equal('The Internet');
  });

    // Quit webdriver
    after(async () => driver.quit());
  });
