# Meteor-easy-test (beta)

This package allow you to start testing your application (client and server side), using popular tools mocha/chai/sinon and React testing utils in few step.

----------
**note:**
- use React instead of Blaze.
- tested on  Meteor 1.3, with React.

***It's just beta, so design and function will be improved.*** 
***Special thanks for the feedback and suggestions!***

----------
**How to start.**

 - first, install package:

> npm i meteor-easy-test

 - second, create folder in root:

> /test

 - and file:

> /test/test.jsx

 - In file `test.jsx` first you have to import config:

```
import 'meteor-easy-test/config';
```



**That's it!**

----------
 Now you can start write your test right in this file, wrap it in function and export:
```
import 'meteor-easy-test/config';

export default () => {
    describe("my test case", function () {
        it("my test", function () {
            assert.equal(1, 1);
        });
    });
};
```

or:
```
import 'meteor-easy-test/config';

export let testCase = () => {
    describe("my test case", function () {
        it("my test", function () {
            assert.equal(1, 1);
        });
    });
};
```

even this will work:

```
import 'meteor-easy-test/config';

export default () => {
    describe("my test case", function () {
        it("my test", function () {
            assert.equal(1, 1);
        });
    });
};
export let testCase = () => {
    describe("my test case", function () {
        it("my test", function () {
            assert.equal(1, 1);
        });
    });
};
```
but don't use this option :)


----------


Also you can create different test cases in different file (but make sure that all file in folder `test` ), and just call them in `test.jsx`.
 
`first-case.jsx`:
```
 export default testCase = () => {
     describe("my test case", function () {
         it("my test", function () {
             assert.equal(1, 1);
         });
     });
 }();
```
 
`test.jsx`:
```
 import 'meteor-easy-test/config';
 
 import testCase from './first-case';
 import anotherCase from './another-case'; // the number of cases is not limited
 
 export {testCase, anotherCase};
 
```


To show test result you should add React component in your application. To do that just import component `<TestBord />` and mount wherever you want.
```
import TestBord from 'meteor-easy-test';
```


----------
**Thanks for attention) hope the package was helpful for you!**
***p.s. star to be notified***