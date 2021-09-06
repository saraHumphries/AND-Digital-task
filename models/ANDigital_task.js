const { PassThrough } = require("stream");

const Solution = function() {
    

    Solution.prototype.execute = function(input) {

        if (input.length == 2) {
            const ordered_digits = input.split("").sort().reverse();
            return this.dealWith2Digits(ordered_digits);
        }
        else {
            const solutions = [];
        const ordered_digits = input.split("").sort().reverse();
        for (const digit of ordered_digits) {
            const indexOfDigit = ordered_digits.indexOf(digit);
            const other_digits = [...ordered_digits]
            other_digits.splice(indexOfDigit, 1);
            const twoDigits = this.dealWith2Digits(other_digits);
            for (result of twoDigits) {
                const solution = digit.concat(result);
                solutions.push(solution);
            };
        };
        return solutions;
        };
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