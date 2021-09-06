const { PassThrough } = require("stream");

const Solution = function() {
    

    Solution.prototype.execute = function(input) {
        const ordered_digits = input.split("").sort().reverse();
        return this.dealWith2Digits(ordered_digits);

    };

    Solution.prototype.dealWith2Digits = function(twoDigitArray) {
        solutions = [];
        const largest_digit = twoDigitArray[0];
        const smallest_digit = twoDigitArray[1];

        const solution1 = largest_digit + smallest_digit;
        solutions.push(solution1);
        const solution2 = smallest_digit + largest_digit;
        solutions.push(solution2);
        return solutions;
    };

};



module.exports = Solution;