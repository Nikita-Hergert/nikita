// var assert = require('assert');
const expect = require('chai').expect;
var app = require('../../src/app/vcap_application');

describe('Beck End (BE) Tests', function () {
  // Timeout to gibe the test a bit more time to finish
  this.timeout(10000);
    it('Your very first test', function () {
      const appappName = app.get_app_name();
      expect(appappName).to.be.undefined;
    });

    // TODO write more tests
    it('Todo Test', function () {
      // TODO more tests....
    });
    it('Todo Test', function () {
      // TODO more tests....
    });
    // TODO write even more tests
});