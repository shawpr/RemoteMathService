var assert = require('assert');
var mathFuntion = require('../correctedMathService.js');
var callOneService = require('../tests/callOneService.js').CallOneService;
var callTwoService = require('../tests/callTwoService.js').CallTwoService;

describe('mathFuntion', function () {

    it('should return correct', function () {
        var x = callOneService(1);
        var y = callTwoService(2);

        return Promise.all([x, y]).then(function (values) {
            var one = values[0];
            var two = values[1];
            var answer = one + two;
            if (answer !== 3) {
                console.log("wrong answer", answer);
            } else {
                console.log("correct");
            }
            assert.equal(answer, 3);
        });
    });


    it('should return wrong answer 10', function () {
        var x = callOneService(1);
        var y = callTwoService(9);

        return Promise.all([x, y]).then(function (values) {
            var one = values[0];
            var two = values[1];
            var answer = one + two;
            if (answer !== 3) {
                console.log("wrong answer", answer);
            } else {
                console.log("correct");
            }
            assert.equal(answer, 10);
        });
    });


    it('should catch error when passing a string', function () {
        var x = callOneService(1);
        var y = callTwoService("sample string");

        return Promise.all([x, y]).catch(function (err) {
            console.log("error ", err);
            assert.equal(err, "sample string");
        });
    });
});
