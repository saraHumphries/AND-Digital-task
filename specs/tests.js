const assert = require('assert');
const Solution = require('../models/ANDigital_task.js');


describe('Solution', function() {

    beforeEach(function() {
        solution = new Solution();
    });

    it("returns solutions for 2 digit number", function() {
        const actual = solution.execute('43');
        const expected = ['43', '34'];
        assert.deepStrictEqual(actual, expected);;
    }); 

    it("returns solutions for 2 digit number large number last", function() {
        const actual = solution.execute('34');
        const expected = ['43', '34'];
        assert.deepStrictEqual(actual, expected);;
    });



    it("should output '632, 623, 362, 326, 263, 236' for '326'", function() {
        const actual = solution.execute('326');
        const expected = ['632', '623', '362', '326', '263', '236'];
        assert.deepStrictEqual(actual, expected);
    });

    it("should output '632, 623, 362, 326, 263, 236' for 'A 3B2 C6D'", function() {
        const actual = solution.execute('A 3B2 C6D');
        const expected = ['632', '623', '362', '326', '263', '236'];
        assert.deepStrictEqual(actual, expected);
    });


})