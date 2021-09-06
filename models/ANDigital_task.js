const { PassThrough } = require("stream");

const Solution = function() {
    

    Solution.prototype.execute = function(input) {

        const ordered_digits = input.split("").sort().reverse();

        if (input.length == 2) {
            return this.dealWith2Digits(ordered_digits);
        }
        else if (input.length == 3) {
        return this.dealWith3Digits(ordered_digits);
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

    Solution.prototype.dealWith3Digits = function(threeDigitArray) {
        const solutions = [];
        for (const digit of threeDigitArray) {
            const indexOfDigit = threeDigitArray.indexOf(digit);
            const other_digits = [...threeDigitArray]
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



module.exports = Solution;