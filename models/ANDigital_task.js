const { PassThrough } = require("stream");

const Solution = function() {
    

    Solution.prototype.execute = function(input) {
        let solutions = '';
        const ordered_digits = input.split("").sort();
        const largest_digit = ordered_digits.slice(-1)[0];
        const smallest_digit = ordered_digits[0];
        const solution1 = largest_digit + smallest_digit;
        solutions += solution1 + ', ';
        const solution2 = smallest_digit + largest_digit;
        solutions += solution2;
        return solutions;
    };

};

module.exports = Solution;