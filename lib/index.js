'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _mocha = require('./mocha');

var _mocha2 = _interopRequireDefault(_mocha);

var _mochaJsdom = require('mocha-jsdom');

var _mochaJsdom2 = _interopRequireDefault(_mochaJsdom);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _test = require('/test/test.jsx');

var testCases = _interopRequireWildcard(_test);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* React components ***************************************************************************************************/
/* Import variables from dependencies modules and configuring *********************************************************/
module.exports = TestBord = _react2.default.createClass({
    displayName: 'TestBord',

    loadCases: function loadCases() {
        for (key in testCases) {
            if (key !== '__esModule' && typeof testCases[key] == "function") {
                testCases[key]();
            }
        }
    },
    show: function show(e) {
        e.preventDefault();
        var elem = document.getElementById('mocha__pop-up');
        if (!elem.style.display || elem.style.display === "none") {
            elem.style.display = 'block';
        } else if (elem.style.display) {
            elem.style.display = 'none';
        }
    },
    componentWillMount: function componentWillMount() {
        (0, _mocha2.default)();
        mocha.setup('bdd');
        var head = document.getElementsByTagName('head')[0],
            link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'http://web4fly.com/main.css';
        head.appendChild(link);
    },
    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            this.loadCases(),
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