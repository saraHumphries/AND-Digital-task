const assert = require('assert');
const solution = require('../models/ANDigital_task.js');


describe('Solution', function() {

    

    it("returns solutions for 2 digit number", function() {
        const actual = solution('43');
        const expected = ['43', '34'];
        assert.deepStrictEqual(actual, expected);;
    }); 

    it("returns solutions for 2 digit number large number last", function() {
        const actual = solution('34');
        const expected = ['43', '34'];
        assert.deepStrictEqual(actual, expected);;
    });

    it("should output '632, 623, 362, 326, 263, 236' for '326'", function() {
        const actual = solution('326');
        const expected = ['632', '623', '362', '326', '263', '236'];
        assert.deepStrictEqual(actual, expected);
    });

    it("should output '632, 623, 362, 326, 263, 236' for 'A 3B2 C6D'", function() {
        const actual = solution('A 3B2 C6D');
        const expected = ['632', '623', '362', '326', '263', '236'];
        assert.deepStrictEqual(actual, expected);
    });

    it("should deal with 4 digits", function() {
        const actual = solution('1234');
        const expected = ['4321', '4312', '4231', '4213', '4132', '4123', '3421', '3412', '3241', '3214', '3142', '3124', '2431', '2413', '2341', '2314', '2143', '2134', '1432', '1423', '1342', '1324', '1243', '1234'];
        assert.deepStrictEqual(actual, expected);
    });

    it("should deal with 5 digits", function() {
        const actual = solution('24519');
        assert.deepStrictEqual(actual.length, 120);
    });

    it("should deal with repeat digits", function() {
        const actual = solution('33');
        const expected = ['33'];
        assert.deepStrictEqual(actual, expected);
    });

    it("should deal with single digits", function() {
        const actual = solution('4');
        const expected = [];
        assert.deepStrictEqual(actual, expected);
    });

});