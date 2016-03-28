"use strict";

module.exports = function () {
    global.chai = require('chai');
    global.expect = chai.expect;
    global.AssertionError = chai.AssertionError;
    global.Assertion = chai.Assertion;
    global.assert = chai.assert;

    chai.should();
    chai.config.includeStack = true;
    chai.use(require("sinon-chai"));
}();