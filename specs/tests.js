const assert = require('assert');
const Solution = require('../models/ANDigital_task.js')


describe('Solution', function() {

    beforeEach(function() {
        solution = new Solution();
    });

    it("should output '632, 623, 362, 326, 263, 236' for '326'", function() {
        const actual = solution.execute('326');
        const expected = ['632','623','362','326','263','236']
        assert.deepStrictEqual(actual, expected);
    });


})