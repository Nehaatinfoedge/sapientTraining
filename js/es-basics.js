***********************************************************************
1) FIRST ::::::::::::::
***********************************************************************

var x = 3;
function func(randomize) {
    var x;
    if (randomize) {
        x = Math.random();
        return x;
    }
    return x;
}
func(false); // undefined

-------------------------------------------------------------------------

let x = 3;
function func(randomize) {
    if (randomize) {
        let x = Math.random();
        return x;
    }
    return x;
}
func(false); // 3

************************************************************************
2) SECOND :::::
************************************************************************
(function () {  // open IIFE
    var tmp = ···;
    ···
}());  // close IIFE

console.log(tmp); // ReferenceError

-------------------------------------------------------------------------

{  // open block
    let tmp = ···;
    ···
}  // close block

console.log(tmp); // ReferenceError

***************************************************************************
3) THIRD :::::::
***************************************************************************

function UiComponent() {
    var _this = this; // (A)
    var button = document.getElementById('myButton');
    button.addEventListener('click', function () {
        console.log('CLICK');
        _this.handleClick(); // (B)
    });
}
--------------------------------------------------------------------------

function UiComponent() {
    var button = document.getElementById('myButton');
    button.addEventListener('click', () => {
        console.log('CLICK');
        this.handleClick(); // (A)
    });
}
**************************************************************************
4) FOURTH  ::::::::
**************************************************************************

var matchObj =
    /^(\d\d\d\d)-(\d\d)-(\d\d)$/
    .exec('2999-12-31');
var year = matchObj[1];
var month = matchObj[2];
var day = matchObj[3];

--------------------------------------------------------------------------

const [, year, month, day] =
    /^(\d\d\d\d)-(\d\d)-(\d\d)$/
    .exec('2999-12-31');

**********************************************************************
5) FIFTH :::::::::
**********************************************************************

var obj = { foo: 123 };

var propDesc = Object.getOwnPropertyDescriptor(obj, 'foo');
var writable = propDesc.writable;
var configurable = propDesc.configurable;

console.log(writable, configurable); // true true

-----------------------------------------------------------------------

const obj = { foo: 123 };

const {writable, configurable} =
    Object.getOwnPropertyDescriptor(obj, 'foo');

console.log(writable, configurable); // true true
{writable, configurable} is an abbreviation for:

{ writable: writable, configurable: configurable }

**********************************************************************
6) SIXTH  :::::::
**********************************************************************

var arr = ['a', 'b', 'c'];
for (var i=0; i<arr.length; i++) {
    var elem = arr[i];
    console.log(elem);
}
In ES5, you have the option of using the Array method forEach():

arr.forEach(function (elem) {
    console.log(elem);
});

-------------------------------------------------------------------------

const arr = ['a', 'b', 'c'];
for (const elem of arr) {
    console.log(elem);
}

for (const [index, elem] of arr.entries()) {
    console.log(index+'. '+elem);
}
**************************************************************************
7) SEVENTH ::::::::
**************************************************************************



