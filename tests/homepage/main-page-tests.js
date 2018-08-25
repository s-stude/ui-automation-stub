const uuidv1 = require('uuid/v1');
const { getConfig } = require('../../config');

module.exports = {
  '@tags': ['demo', 'example', 'web'],

  before: function(browser) {
    browser
      .url(getConfig().host)
      .waitForElementPresent('body', getConfig().timeout)
      .pause(getConfig().timeout);
  },
  after: function(browser) {
    browser.end();
  },

  'Should open main page': function(browser) {
    browser
      .pause(getConfig().timeout)
      .assert.title('Mary Kay | Official Site')
      .saveScreenshot('./reports/%ID%.png'.replace('%ID%', uuidv1()));
  },

  'Should have correct title': function(browser) {
    browser
      .pause(getConfig().timeout)
      .assert.title('WRONG TITLE');
  },

  // 'Should have hero carousel: ': function(browser) {
  //   browser
  //     .waitForElementPresent('.carousel', getConfig().timeout)
  //     .assert.visible('.carousel-inner');
  // },

  // 'Should be able to open minibag': function(browser) {
  //   browser
  //     .waitForElementPresent('.header-minibag', getConfig().timeout)
  //     .click('.bag-button')
  //     .pause(getConfig().timeout)
  //     .assert.visible('.minibag-wrapper');
  // }


};