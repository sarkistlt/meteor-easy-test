'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _mochaJsdom = require('mocha-jsdom');

var _mochaJsdom2 = _interopRequireDefault(_mochaJsdom);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _test = require('/test/test.jsx');

var testsObj = _interopRequireWildcard(_test);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

expect = _chai2.default.expect; /* Import variables from dependencies modules and configuring *********************************************************/

AssertionError = _chai2.default.AssertionError;
Assertion = _chai2.default.Assertion;
assert = _chai2.default.assert;

_chai2.default.should();
_chai2.default.config.includeStack = true;
_chai2.default.use(require("sinon-chai"));

/* Import and wrapping test cases *************************************************************************************/


var loadCases = function loadCases() {
    for (key in testsObj) {
        if (key !== '__esModule') {
            testsObj[key]();
        }
    }
};

/* React components ***************************************************************************************************/
var Mocha = _react2.default.createClass({
    displayName: 'Mocha',

    show: function show(e) {
        e.preventDefault();
        var elem = document.getElementById('mocha__pop-up');
        if (!elem.style.display || elem.style.display === "none") {
            elem.style.display = 'block';
        } else if (elem.style.display) {
            elem.style.display = 'none';
        }
    },
    /*    componentWillMount: () => {
            console.log(document.head);
            let script = document.createElement('script'),
                scriptBdd = document.createElement('script');
            script.src = "https://cdn.rawgit.com/mochajs/mocha/2.2.5/mocha.js";
            scriptBdd.innerHTML = "mocha.setup('bdd');";
            document.head.appendChild(script);
            document.head.appendChild(scriptBdd);
    
            console.log(document.head);
        },*/
    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            loadCases(),
            _react2.default.createElement('a', { onClick: this.show, role: 'button', className: 'mocha__btn glyphicon glyphicon-asterisk' }),
            _react2.default.createElement(
                'div',
                { id: 'mocha__pop-up' },
                _react2.default.createElement('a', { onClick: this.show, role: 'button', className: 'glyphicon glyphicon-remove',
                    id: 'mocha__pop-up--close-btn' }),
                _react2.default.createElement('div', { id: 'mocha' })
            )
        );
    },
    componentDidMount: function componentDidMount() {
        document.getElementById('mocha__pop-up').style.display = 'block';
        mocha.run();
    }
});

module.exports = Mocha;