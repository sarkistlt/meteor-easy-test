/* Import variables from dependencies modules and configuring *********************************************************/
import React from 'react';
import ReactDOM from 'react-dom';
import scriptMocha from './mocha';
import jsdom from 'mocha-jsdom';
import ReactTestUtils from 'react-addons-test-utils';
import * as testCases from "/test/test.jsx";

/* React components ***************************************************************************************************/
const TestBord = React.createClass({
    loadCases: () => {
        for (key in testCases) {
            if (key !== '__esModule') {
                testCases[key]();
            }
        }
    },
    show: (e) => {
        e.preventDefault();
        let elem = document.getElementById('mocha__pop-up');
        if (!elem.style.display || elem.style.display === "none") {
            elem.style.display = 'block';
        } else if (elem.style.display) {
            elem.style.display = 'none';
        }

    },
    componentWillMount: () => {
        scriptMocha();
        mocha.setup('bdd');
    },
    render: function () {
        return (
            <div>
                {this.loadCases()}
                <a onClick={this.show} role="button" className="mocha__btn glyphicon glyphicon-asterisk"/>
                <div id="mocha__pop-up">
                    <a onClick={this.show} role="button" className="glyphicon glyphicon-remove"
                       id="mocha__pop-up--close-btn"/>
                    <div id="mocha">
                    </div>
                </div>
            </div>
        )
    },
    componentDidMount: () => {
        document.getElementById('mocha__pop-up').style.display = 'block';
        mocha.run();
    }
});

module.exports = TestBord;