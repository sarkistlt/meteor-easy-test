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
            _react2.default.createElement('button', { role: 'button', id: 'mocha__btn', className: 'glyphicon glyphicon-asterisk' }),
            _react2.default.createElement(
                'div',
                { id: 'mocha__pop-up' },
                _react2.default.createElement('div', { id: 'mocha' })
            )
        );
    },
    componentDidMount: function componentDidMount() {
        document.getElementById('mocha__pop-up').style.display = 'block';
        mocha.run();

        var mochaReport = document.getElementById('mocha-report');
        mochaReport.onmousedown = function (e) {
            e.stopPropagation();
        };
        var btn = document.getElementById('mocha__btn');
        btn.onmousedown = function (e) {
            var getCoords = function getCoords(elem) {
                var box = elem.getBoundingClientRect();

                return {
                    top: box.top + pageYOffset,
                    left: box.left + pageXOffset
                };
            };

            var moveAt = function moveAt(e) {
                btn.style.left = e.pageX - shiftX + 'px';
                btn.style.top = e.pageY - shiftY + 'px';
            };

            var coords = getCoords(btn),
                shiftX = e.pageX - coords.left,
                shiftY = e.pageY - coords.top;

            btn.style.position = 'absolute';
            document.body.appendChild(btn);
            moveAt(e);

            btn.style.zIndex = 1000;

            document.onmousemove = function (e) {
                moveAt(e);
            };

            btn.onmouseup = function () {
                document.onmousemove = null;
                btn.onmouseup = null;
            };
        };
        btn.ondragstart = function () {
            return false;
        };
        btn.onclick = function (e) {
            e.preventDefault();
            var elem = document.getElementById('mocha__pop-up');
            if (!elem.style.display || elem.style.display === "none") {
                elem.style.display = 'block';
            } else if (elem.style.display) {
                elem.style.display = 'none';
            }
        };
        var popUp = document.getElementById('mocha__pop-up');
        popUp.onmousedown = function (e) {
            var getCoords = function getCoords(elem) {
                var box = elem.getBoundingClientRect();

                return {
                    top: box.top + pageYOffset,
                    left: box.left + pageXOffset
                };
            };

            var moveAt = function moveAt(e) {
                popUp.style.left = e.pageX - shiftX + 'px';
                popUp.style.top = e.pageY - shiftY + 'px';
            };

            var coords = getCoords(popUp),
                shiftX = e.pageX - coords.left,
                shiftY = e.pageY - coords.top;

            popUp.style.position = 'absolute';
            document.body.appendChild(popUp);
            moveAt(e);

            popUp.style.zIndex = 1000;

            document.onmousemove = function (e) {
                moveAt(e);
            };

            popUp.onmouseup = function () {
                document.onmousemove = null;
                popUp.onmouseup = null;
            };
        };
        popUp.ondragstart = function () {
            return false;
        };
    }
});