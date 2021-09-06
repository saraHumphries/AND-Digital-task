const { PassThrough } = require("stream");

const Solution = function() {
    

    Solution.prototype.execute = function(input) {
        let solutions = '';
        const first_digit = input.split("")[0];
        const second_digit = input.split("")[1];
        const solution1 = second_digit + first_digit;
        solutions += solution1 + ', ';
        const solution2 = first_digit + second_digit;
        solutions += solution2;
        return solutions;
    };

};

module.exports = Solution;